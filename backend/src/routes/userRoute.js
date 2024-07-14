// const { default: addUser } = require('../services/user');
const express = require('express')

const router = express.Router();
const { addUser, getUser } = require('../controllers/userController')

router.post('/submit', addUser)
router.get('/:userName', getUser);


module.exports = router;