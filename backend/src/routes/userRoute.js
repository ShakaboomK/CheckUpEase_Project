// const { default: addUser } = require('../services/user');
const express = require('express')
const { db } = require('../config/firebase')

const router = express.Router();
const { validateBody } = require('../middlewares/validation')
const { userRegistrationSchema,
    userLoginSchema,
    userProfileUpdateSchema, paymentSchema, appointmentSchema } = require('../models/schemas')
const { registerUser, loginUser, updateUserProfile, showUserProfile } = require('../controllers/userController');
// const { valid } = require('joi');
const { bookingAppointment } = require('../controllers/appointmentController')
const { searchDiagnosticCenters, diagnosticCenterDetails } = require('../controllers/diagnosticsCenter')
const { handlePayment } = require('../controllers/paymentsController')

router.post('/register', validateBody(userRegistrationSchema), registerUser)
router.post('/login', validateBody(userLoginSchema), loginUser);
router.put('/user-profile/update', updateUserProfile);
router.get('/user-profile', showUserProfile);
router.post('/bookappointment', validateBody(appointmentSchema), bookingAppointment);
router.get('/srch-diag-cntr', searchDiagnosticCentersByLocation);
router.post('/payments', validateBody(paymentSchema), handlePayment);
router.post('/searchCenter', searchDiagnosticCenters)
router.get('searchCenter/centerDetails/: centerId /: date', diagnosticCenterDetails)
router.get('/test', async (req, res) => {
    try {
        const testDoc = await db.collection('test').doc('testDoc').get();
        if (!testDoc.exists) {
            return res.status(404).send('Test document not found.');
        }
        res.status(200).send(testDoc.data());
    } catch (error) {
        console.error('Error fetching test document:', error);
        res.status(500).send('Internal Server Error');
    }
});


module.exports = router;