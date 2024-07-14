/**
 * The `bookingAppointment` function creates a new appointment in a database, updates the user's
 * visited centers list, and returns the appointment ID.
 * @param req - The `req` parameter typically represents the request object in an Express.js route
 * handler. It contains information about the incoming HTTP request such as headers, parameters, body,
 * etc. In this context, `req.body` is used to access the data sent in the request body.
 * @param res - The `res` parameter in the `bookingAppointment` function is the response object that
 * will be used to send a response back to the client making the request. In this case, the function is
 * setting a status of 201 (Created) and sending a response containing the `appointmentId` back to
 */
const bookingAppointment = async (req, res) => {
    const { userId, diagnosticCenterId, service, appointmentDate } = req.body;
    const appointmentRef = db.collection('appointments').doc();
    await appointmentRef.set({
        userId,
        diagnosticCenterId,
        service,
        appointmentDate: new Date(appointmentDate),
        status: 'booked',
        paymentId: null
    });

    await db.collection('users').doc(userId).update({
        visitedCenters: admin.firestore.FieldValue.arrayUnion(diagnosticCenterId)
    });

    res.status(201).send({ appointmentId: appointmentRef.id });
}

module.exports = { bookingAppointment }
