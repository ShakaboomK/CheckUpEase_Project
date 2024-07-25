
const { db } = require('../config/firebase')
const { diagnosticCenterSchema } = require('../models/schemas')
/*
 * The function searches for diagnostic centers by location and returns the matching results.
 * @param req - The `req` parameter in the `searchDiagnosticCentersByLocation` function is typically an
 * object representing the HTTP request. It contains information about the request made to the server,
 * such as the request headers, query parameters, body content, and more. In this specific function,
 * `req.query`
 * @param res - The `res` parameter in the `searchDiagnosticCentersByLocation` function is the response
 * object that will be used to send a response back to the client making the request. It is typically
 * used to send HTTP responses with data or error messages. In the provided code snippet, the `res`
 * @returns The function `searchDiagnosticCentersByLocation` is returning either a 404 status with the
 * message 'No matching diagnostic centers found.' if no centers are found for the provided location,
 * or a 200 status with an array of diagnostic centers (including their IDs and data) if matching
 * centers are found.
 */
const createSlots = async (req, res) => {
    const { centerId, startDate, endDate, times } = req.body
    if (!centerId || !startDate || !endDate || !Array.isArray(times) || times.length === 0) {
        return res.status(400).json({ error: "Invalid request payload" });
    }

    try {
        const batch = db.batch();

        let currentDate = new Date(startDate);
        const end = new Date(endDate);

        while (currentDate <= end) {
            const dateStr = currentDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD

            times.forEach(time => {
                const slotRef = db.collection('slots').doc();
                batch.set(slotRef, {
                    centerId,
                    date: dateStr,
                    time,
                    available: true,
                    createdAt: admin.firestore.FieldValue.serverTimestamp(),
                    updatedAt: admin.firestore.FieldValue.serverTimestamp()
                });
            });

            // Move to the next day
            currentDate.setDate(currentDate.getDate() + 1);
        }

        await batch.commit();
        res.status(201).send('Slots created successfully');
    } catch (error) {
        console.error('Error creating slots:', error);
        res.status(500).send('Internal server error');
    }
};


/**
 * The function `searchDiagnosticCenters` searches for diagnostic centers offering a specific test type
 * in a specified location with available slots on a given date.
 * @param req - The `req` parameter in the `searchDiagnosticCenters` function represents the request
 * object, which contains information sent by the client to the server. In this case, it is likely an
 * HTTP request object that includes data in the body of the request. The `req.body` object is being
 * destruct
 * @param res - The `res` parameter in the `searchDiagnosticCenters` function is the response object
 * that will be used to send the response back to the client making the request. It is typically an
 * instance of the Express response object in Node.js applications. The response object allows you to
 * send HTTP responses with data
 */
const searchDiagnosticCenters = async (req, res) => {
    const { testType, location, date } = req.body;

    try {
        // Query to find centers offering the test type and located in the specified location
        const centersSnapshot = await db.collection('diagnosticCenters')
            .where('services', 'array-contains', testType)
            .where('location', '==', location)
            .get();

        let centerList = [];
        let centerPromises = centersSnapshot.docs.map(async (centerDoc) => {
            const centerData = centerDoc.data();
            centerData.id = centerDoc.id; // Add the document ID to the center data

            // Query to find available slots for the center on the specified date
            const slotsSnapshot = await db.collection('slots')
                .where('centerId', '==', centerDoc.id)
                .where('date', '==', date)
                .where('available', '==', true)
                .get();

            if (!slotsSnapshot.empty) {
                // If there are available slots, add the center to the list
                centerList.push(centerData);
            }
        });

        // Wait for all centerPromises to complete
        await Promise.all(centerPromises);

        res.status(200).json(centerList);
    } catch (error) {
        res.status(500).send('Error searching centers: ' + error.message);
    }
};

/**
 * The function `diagnosticCenterDetails` fetches details of a diagnostic center and available slots
 * for a specific date.
 * @param req - The `req` parameter in the `diagnosticCenterDetails` function is an object that
 * represents the HTTP request. It contains information about the request made to the server, such as
 * the request parameters, headers, body, and other details. In this case, the `req` object is being
 * used
 * @param res - The `res` parameter in the `diagnosticCenterDetails` function is the response object
 * that will be used to send the response back to the client making the request. It is typically used
 * to send HTTP responses with data or error messages. In the provided code snippet, `res` is used to
 */
const diagnosticCenterDetails = async (req, res) => {
    const { centerId, date } = req.params;
    try {
        // Fetch center details
        const centerRef = await db.collection('diagnosticCenters').doc(centerId).get();
        if (!centerRef.exists) {
            return res.status(404).send('Center not found');
        }
        const centerData = centerRef.data();
        centerData.id = centerRef.id; // Add the document ID to the center data

        // Fetch available slots for the selected date
        const slotsRef = await db.collection('slots')
            .where('diagnosticCenterId', '==', centerId)
            .where('date', '==', date)
            .where('available', '==', true)
            .get();

        let slots = [];
        slotsRef.forEach(slot => {
            const slotData = slot.data();
            slotData.id = slot.id; // Add the document ID to the slot data
            slots.push(slotData);
        });

        res.status(200).json({ center: centerData, slots });
    } catch (error) {
        res.status(500).send('Error fetching center details: ' + error.message);
    }
}

/**
 * The function `registerDiagnosticCenter` handles the registration of a new diagnostic center by
 * validating input data and saving it to a Firestore database.
 * @param req - The `req` parameter in the `registerDiagnosticCenter` function is typically the request
 * object that contains information sent by the client to the server. In this case, it seems to be an
 * Express request object that likely includes data in the `body` property. The `req.body` object
 * likely contains
 * @param res - The `res` parameter in the `registerDiagnosticCenter` function is the response object
 * that will be used to send responses back to the client making the request. It is typically used to
 * send HTTP responses with status codes and data back to the client. In the provided code snippet,
 * `res` is
 * @returns If there are no validation errors, the function will return a status of 201 along with a
 * success message and the `diagnosticCenterId` of the newly registered diagnostic center. If there is
 * a validation error, it will return a status of 400 along with the specific validation error message.
 * If there is an error during the registration process, it will return a status of 500 along with an
 */
const registerDiagnosticCenter = async (req, res) => {
    const { name, location, address, services, contactInfo } = req.body;

    // Generate a new diagnosticCenterId
    const diagnosticCenterId = db.collection('diagnosticCenters').doc().id;

    // Create the new diagnostic center object
    const newDiagnosticCenter = {
        diagnosticCenterId,
        name,
        location,
        services,
        contactInfo,
        appointments: [],
        address
    };

    // Validate the input
    const { error } = diagnosticCenterSchema.validate(newDiagnosticCenter);

    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    try {
        // Save the new diagnostic center to Firestore
        await db.collection('diagnosticCenters').doc(diagnosticCenterId).set(newDiagnosticCenter);

        return res.status(201).send({ message: 'Diagnostic center registered successfully', diagnosticCenterId });
    } catch (error) {
        console.error('Error registering diagnostic center:', error);
        return res.status(500).send('Internal Server Error');
    }
}
module.exports = { searchDiagnosticCentersByLocation, registerDiagnosticCenter, searchDiagnosticCenters, diagnosticCenterDetails, createSlots }