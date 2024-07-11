// const { express } = require('express')
const { app } = require('./server')
const { db } = require('../models/firebase')

// app.use(express.json())
app.post('/add-data', async (req, res) => {
    try {
        const data = req.body; // Get data from the request body
        const docRef = await db.collection('User').add(data); // Add data to Firestore
        // await docRef.set(data)
        res.status(201).send({ id: docRef.id }); // Respond with the document ID
    } catch (error) {
        console.error('Error adding document: ', error);
        res.status(500).send('Error adding document');
    }
});

app.get('/user-data/:name', async (req, res) => {
    try {
        const userName = req.params.name; // Get the username from the request parameter
        const userData = await db.collection('User').where('name', '==', userName).get(); // Query Firestore for the user data
        if (userData.empty) {
            res.status(404).send(`User not found: ${userName}`);
        } else {
            const userDataDoc = userData.docs[0];
            res.status(200).send(userDataDoc.data()); // Respond with the user data
        }
    } catch (error) {
        console.error('Error getting user data: ', error);
        res.status(500).send('Error getting user data');
    }
});//create a get request using the firebase instance using request parms

module.exports = app;