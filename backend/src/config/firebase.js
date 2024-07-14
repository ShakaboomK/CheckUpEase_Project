const { initializeApp, cert } = require('firebase-admin/app')
const { getFirestore } = require('firebase-admin/firestore')

const serviceAccount = require('./checkup-ease-firebase-adminsdk-7cgvm-47a2cd8465.json')



initializeApp({
    credential: cert(serviceAccount)
})
const db = getFirestore();

module.exports = { db };