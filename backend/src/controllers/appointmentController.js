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

