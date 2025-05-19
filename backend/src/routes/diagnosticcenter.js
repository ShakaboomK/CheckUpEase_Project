const express = require('express')
const { db } = require('../config/firebase')
const { registerDiagnosticCenter, createSlots } = require('../controllers/diagnosticsCenter')

const router = express.Router()

router.post('/register', registerDiagnosticCenter);
router.post('/slots', createSlots)


module.exports = router;