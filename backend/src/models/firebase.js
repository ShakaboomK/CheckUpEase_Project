const { initializeApp, cert } = require('firebase-admin/app')
const { getFirestore } = require('firebase-admin/firestore')

const serviceAccount = require('../utils/checkup-ease-firebase-adminsdk-7cgvm-47a2cd8465.json')

const db = getFirestore();

initializeApp({
    credential: cert(serviceAccount)
})

module.exports = { db };