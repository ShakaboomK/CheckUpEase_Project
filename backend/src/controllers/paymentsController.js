/**
 * The function `handlePayment` processes a payment for a user's appointment, updates payment and
 * appointment information in the database, and returns the payment ID.
 * @param req - The `req` parameter in the `handlePayment` function typically represents the HTTP
 * request object, which contains information sent by the client to the server. In this case, it is
 * likely an Express.js request object that includes data in the `body` property, such as `userId`,
 * `appointmentId
 * @param res - The `res` parameter in the `handlePayment` function is the response object that will be
 * sent back to the client once the payment handling process is completed. In this case, it is used to
 * send a response with the payment ID back to the client after the payment has been successfully
 * processed and recorded
 */
const handlePayment = async (req, res) => {
    const { userId, appointmentId, amount } = req.body;
    const paymentRef = db.collection('payments').doc();
    await paymentRef.set({
        userId,
        appointmentId,
        amount,
        paidAt: new Date(),
        status: 'successful'
    });

    await db.collection('appointments').doc(appointmentId).update({
        paymentId: paymentRef.id,
        status: 'completed'
    });

    await db.collection('users').doc(userId).update({
        paymentHistory: admin.firestore.FieldValue.arrayUnion({
            paymentId: paymentRef.id,
            amount,
            paidAt: new Date(),
            appointmentId
        })
    });

    res.status(201).send({ paymentId: paymentRef.id });
}
module.exports = { handlePayment }