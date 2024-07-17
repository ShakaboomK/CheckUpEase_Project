const express = require('express')
const { db } = require('../config/firebase')
const { registerDiagnosticCenter } = require('../controllers/diagnosticsCenter')

const router = express.Router()

router.post('/register', registerDiagnosticCenter);

module.exports = router;