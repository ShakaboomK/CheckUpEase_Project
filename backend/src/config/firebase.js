const { initializeApp, cert } = require('firebase-admin/app')
const { getFirestore } = require('firebase-admin/firestore')

const serviceAccount = require('./checkup-ease-firebase-adminsdk-7cgvm-1c7c4d09b2.json')



initializeApp({
    credential: cert(serviceAccount)
})
const db = getFirestore();

module.exports = { db };