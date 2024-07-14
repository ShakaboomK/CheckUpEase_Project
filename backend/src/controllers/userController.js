// const { db } = require('../config/firebase');


// const addUser = async (req, res) => {
//     try {
//         const user = req.body;
//         const userRef = await db.collection('users').add(user);
//         res.status(201).json({ id: userRef.id });
//     } catch (error) {
//         res.status(500).send('Iternal Server Error, please try again later')
//     }

// }
// const getUser = async (req, res) => {
//     try {
//         const prefix = req.params.userName;
//         const endPrefix = prefix + '\uf8ff'; // Firestore's highest possible UTF-8 character

//         const userRef = await db.collection('users')
//             .where('name', '>=', prefix)
//             .where('name', '<', endPrefix)
//             .get();

//         if (userRef.empty) {
//             res.status(404).send('User not found');
//         } else {
//             let users = [];
//             userRef.forEach(doc => {
//                 users.push(doc.data());
//             });
//             res.status(200).json(users);
//         }
//     }
//     catch (error) {
//         res.status(500).send('Server Error')
//     }
// }

// module.exports = { getUser, addUser }

const { db } = require('../config/firebase')

/**
 * The function `registerUser` registers a new user by hashing the password and storing user
 * information in a database collection.
 * @param req - The `req` parameter typically represents the HTTP request that comes from the client to
 * the server. It contains information such as the request headers, body, parameters, and more. In this
 * specific context, `req.body` is likely an object containing data sent by the client in the request
 * body, usually
 * @param res - The `res` parameter in the `registerUser` function is the response object that will be
 * sent back to the client once the user registration process is completed. It is used to send a
 * response back to the client with a status code and any data that needs to be returned, such as a
 * success
 */
const registerUser = async (req, res) => {
    const { username, password, mobileNumber, email, age } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    await db.collection('users').doc(username).set({
        username,
        password: hashedPassword,
        mobileNumber,
        email,
        age,
        gender: null,
        bloodGroup: null,
        familyMembers: [],
        visitedCenters: [],
        results: [],
        paymentHistory: []
    });

    res.status(201).send({ message: 'User registered successfully', username });

}

/**
 * The function `loginUser` is an asynchronous function that handles user authentication by checking
 * the username and password, and returns a JWT token upon successful login.
 * @param req - The `req` parameter typically represents the request object in an Express.js route
 * handler. It contains information about the HTTP request made by the client, such as request headers,
 * parameters, body, and more.
 * @param res - The `res` parameter in the `loginUser` function is the response object that will be
 * used to send the response back to the client making the request. It is typically used to send HTTP
 * responses with status codes, headers, and data back to the client. In the provided code snippet, the
 * @returns The `loginUser` function returns different responses based on the conditions:
 */
const loginUser = async (req, res) => {
    const { username, password } = req.body;
    const userRef = db.collection('users').doc(username);
    const doc = await userRef.get();

    if (!doc.exists) {
        return res.status(404).send('User not found.');
    }

    const user = doc.data();
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(401).send('Invalid username or password.');
    }

    // Simulating JWT token generation
    const token = `fake-jwt-token-for-${username}`;
    res.status(200).send({ message: 'Login successful', token });
}

/**
 * The function updateUserProfile updates a user's profile in a Firestore database based on the
 * provided username and request body.
 * @param req - The `req` parameter typically represents the HTTP request in a Node.js application. It
 * contains information about the request made by the client, such as the request headers, parameters,
 * body, and more. In the provided code snippet, `req` is used to access the parameters and body of the
 * request
 * @param res - The `res` parameter in the `updateUserProfile` function is the response object that is
 * used to send a response back to the client making the request. It is typically used to send HTTP
 * responses with status codes, headers, and data back to the client. In the provided code snippet, the
 * `
 * @returns The function `updateUserProfile` is returning a response based on the outcome of updating a
 * user's profile. If the user document does not exist in the database, it will return a 404 status
 * with the message 'User not found.'. If the user profile is successfully updated, it will return a
 * 200 status with the message 'User profile updated successfully'.
 */
const updateUserProfile = async (req, res) => {
    const { username } = req.params;
    const userRef = db.collection('users').doc(username);

    const doc = await userRef.get();
    if (!doc.exists) {
        return res.status(404).send('User not found.');
    }

    await userRef.update(req.body);
    res.status(200).send({ message: 'User profile updated successfully' });
}

// Show user profile
/**
 * The function `showUserProfile` retrieves a user's profile data from a Firestore database based on
 * the provided username.
 * @param req - The `req` parameter typically represents the HTTP request object in Node.js
 * applications. It contains information about the incoming request from the client, such as request
 * headers, parameters, body, and more. In the provided code snippet, `req.params` is used to extract
 * the `username` parameter from the
 * @param res - The `res` parameter in the `showUserProfile` function is the response object that is
 * used to send a response back to the client making the request. It is typically used to send HTTP
 * responses with data or status codes. In the provided code snippet, `res` is used to send a response
 * @returns If the document for the specified username exists in the 'users' collection, the data of
 * that document will be sent in the response with a status code of 200. If the document does not
 * exist, a response with a status code of 404 and the message 'User not found.' will be sent.
 */
const showUserProfile = async (req, res) => {
    const { username } = req.params;
    const userRef = db.collection('users').doc(username);
    const doc = await userRef.get();

    if (!doc.exists) {
        return res.status(404).send('User not found.');
    }

    res.status(200).send(doc.data());
}

module.exports = { registerUser, loginUser, updateUserProfile, showUserProfile }