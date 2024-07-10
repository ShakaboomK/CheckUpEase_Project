// const { express } = require('express')
const { app } = require('./server')
const { db } = require('../models/firebase')

// app.use(express.json())
app.post('/add-data', async (req, res) => {
    try {
        const data = req.body; // Get data from the request body
        const docRef = await db.collection('User').doc('userDetails'); // Add data to Firestore
        await docRef.set(data)
        res.status(201).send({ id: docRef.id }); // Respond with the document ID
    } catch (error) {
        console.error('Error adding document: ', error);
        res.status(500).send('Error adding document');
    }
});