// const { default: addUser } = require('../services/user');
const express = require('express')

const router = express.Router();
const { validateBody } = require('../middlewares/validation')
const { userRegistrationSchema,
    userLoginSchema,
    userProfileUpdateSchema, paymentSchema, appointmentSchema } = require('../models/schemas')
const { registerUser, loginUser, updateUserProfile, showUserProfile } = require('../controllers/userController');
// const { valid } = require('joi');
const { bookingAppointment } = require('../controllers/appointmentController')
const { searchDiagnosticCentersByLocation } = require('../controllers/diagnosticsCenter')
const { handlePayment } = require('../controllers/paymentsController')

router.post('/register', validateBody(userRegistrationSchema), registerUser)
router.post('/login', validateBody(userLoginSchema), loginUser);
router.put('/update', validateBody(userProfileUpdateSchema), updateUserProfile);
router.get('/user-profile', showUserProfile);
router.post('/bookappointment', validateBody(appointmentSchema), bookingAppointment);
router.get('/srch-diag-cntr', searchDiagnosticCentersByLocation);
router.post('/payments', validateBody(paymentSchema), handlePayment);


module.exports = router;