
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
const searchDiagnosticCentersByLocation = async (req, res) => {
    const { location } = req.query; // Use req.query to get the query parameter

    if (!location) {
        return res.status(400).send('Location is required.');
    }

    const centersRef = db.collection('diagnosticCenters');
    const snapshot = await centersRef.where('location', '==', location).get();

    if (snapshot.empty) {
        return res.status(404).send('No matching diagnostic centers found.');
    }

    let centers = [];
    snapshot.forEach(doc => centers.push({ id: doc.id, ...doc.data() }));
    res.status(200).send(centers);
}

const registerDiagnosticCenter = async (req, res) => {
    const { name, location, services, contactInfo } = req.body;

    // Generate a new diagnosticCenterId
    const diagnosticCenterId = db.collection('diagnosticCenters').doc().id;

    // Create the new diagnostic center object
    const newDiagnosticCenter = {
        diagnosticCenterId,
        name,
        location,
        services,
        contactInfo,
        appointments: []
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
module.exports = { searchDiagnosticCentersByLocation, registerDiagnosticCenter }