// const { default: addUser } = require('../services/user');
const express = require('express')

const router = express.Router();
const { validateBody } = require('../middlewares/validation')
const { userRegistrationSchema,
    userLoginSchema,
    userProfileUpdateSchema } = require('../models/schemas')
const { registerUser, loginUser, updateUserProfile, showUserProfile } = require('../controllers/userController');
// const { valid } = require('joi');

router.post('/register', validateBody(userRegistrationSchema), registerUser)
router.post('/login', validateBody(userLoginSchema), loginUser);
router.put('/update/:username', validateBody(userProfileUpdateSchema), updateUserProfile);
router.get('/:username', showUserProfile);


module.exports = router;