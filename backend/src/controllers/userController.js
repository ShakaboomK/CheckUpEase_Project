// const { express } = require('express')
const { app } = require('./server')
const { db } = require('../models/firebase')
const { router } = require('../routes/userRoute')

// app.use(express.json())




// app.get('/user-data/:name', async (req, res) => {
//     try {
//         const userName = req.params.name; // Get the username from the request parameter
//         const userData = await db.collection('User').where('name', '==', userName).get(); // Query Firestore for the user data
//         if (userData.empty) {
//             res.status(404).send(`User not found: ${userName}`);
//         } else {
//             const userDataDoc = userData.docs[0];
//             res.status(200).send(userDataDoc.data()); // Respond with the user data
//         }
//     } catch (error) {
//         console.error('Error getting user data: ', error);
//         res.status(500).send('Error getting user data');
//     }
// });//create a get request using the firebase instance using request parms

module.exports