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
const bcrypt = require('bcrypt')
const { userProfileUpdateSchema } = require('../models/schemas')



/**
 * The `registerUser` function asynchronously registers a user by hashing the password, creating a new
 * user document in a Firestore collection, and sending a success message with the username.
 * @param req - The `req` parameter typically represents the HTTP request in a Node.js application. It
 * contains information about the request made by the client, such as the request headers, body,
 * parameters, and more. In this specific context, `req.body` is used to access the body of the
 * request, which
 * @param res - The `res` parameter in the `registerUser` function is the response object that will be
 * used to send a response back to the client making the request. In this case, the function sets the
 * status to 201 (Created) and sends a JSON response with a message indicating that the user was
 */
const registerUser = async (req, res) => {
    const { username, password, mobileNumber, email, age } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const userRef = db.collection('users').doc();
    const userId = userRef.id;
    await userRef.set({
        userId,
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
 * The function `loginUser` handles user authentication by checking the username and password against
 * stored user data in a Firestore database and generating a simulated JWT token upon successful login.
 * @param req - The `req` parameter in the `loginUser` function typically represents the HTTP request
 * object, which contains information about the incoming request from the client. This object includes
 * properties such as `req.body` (containing the parsed request body), `req.params` (containing route
 * parameters), `req
 * @param res - The `res` parameter in the `loginUser` function is the response object that is used to
 * send a response back to the client making the request. It is typically an instance of the Express
 * response object in Node.js applications. In this function, the `res` object is used to send
 * different
 * @returns The `loginUser` function returns different responses based on the outcome of the login
 * process:
 */
const loginUser = async (req, res) => {
    const { username, password } = req.body;
    const userRef = db.collection('users').where('username', '==', username);
    const snapshot = await userRef.get();

    if (snapshot.empty) {
        return res.status(404).send('User not found.');
    }

    // Assuming you prompt the user to choose their correct account if multiple accounts exist
    let user;
    let userDoc;
    /* The line `for (let doc of snapshot.docs)` is a loop that iterates over the documents (docs) in
    the snapshot retrieved from the Firestore database. */
    for (let doc of snapshot.docs) {
        let potentialUser = doc.data();
        const isPasswordValid = await bcrypt.compare(password, potentialUser.password);
        if (isPasswordValid) {
            user = potentialUser;
            userDoc = doc;
            break;
        }
    }

    if (!user) {
        return res.status(401).send('Invalid username or password.');
    }

    // Simulating JWT token generation
    /* The line `const token = `fake-jwt-token-for- ${userRef.id}`;` is creating a simulated
    JWT (JSON Web Token) for the user who successfully logs in. */
    const token = userDoc.id;
    res.status(200).send({ message: 'Login successful', token });
}


/**
 * The function updateUserProfile updates a user's profile in a Firestore database based on the request
 * body data.
 * @param req - The `req` parameter typically represents the HTTP request in a Node.js application. It
 * contains information about the incoming request such as headers, parameters, body, etc. In the
 * provided code snippet, `req` is used to access the `body` property which likely contains the data to
 * update the user
 * @param res - The `res` parameter in the `updateUserProfile` function is the response object that is
 * used to send a response back to the client making the request. In this function, it is used to send
 * status codes and messages back to the client after updating the user profile.
 * @returns The function `updateUserProfile` is returning a response to the client based on the outcome
 * of updating a user's profile. If the user with the specified `userId` does not exist in the
 * database, it returns a 404 status with the message 'User not found.'. If the user profile is
 * successfully updated, it returns a 200 status with the message 'User profile updated successfully'.
 */
const updateUserProfile = async (req, res) => {
    try {
        const { userId, ...updateData } = req.body;

        if (!userId) {
            return res.status(400).send('User ID is required.');
        }

        // Validate the updateData with Joi
        const { error } = userProfileUpdateSchema.validate(updateData);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }

        const userRef = db.collection('users').doc(userId);

        // Optional: Logging to help debug
        console.log('Updating user profile for userId:', userId);

        const doc = await userRef.get();
        if (!doc.exists) {
            return res.status(404).send('User not found.');
        }

        await userRef.update(updateData);
        res.status(200).send({ message: 'User profile updated successfully' });
    } catch (error) {
        console.error('Error updating user profile:', error);
        res.status(500).send('Error updating user profile.');
    }
}


/**
 * The function `showUserProfile` retrieves a user's profile data from a Firestore database based on
 * the provided userId.
 * @param req - The `req` parameter typically represents the request object in an Express.js route
 * handler. It contains information about the incoming HTTP request such as headers, parameters, body,
 * etc. In this specific function `showUserProfile`, `req` is used to extract the `userId` from the
 * request body to fetch
 * @param res - The `res` parameter in the `showUserProfile` function is the response object that will
 * be used to send a response back to the client making the request. It is typically used to send HTTP
 * responses with status codes and data.
 * @returns If the user document exists in the database, the data of the user document will be returned
 * with a status code of 200. If the user document does not exist, a status code of 404 will be
 * returned with the message 'User not found'.
 */
const showUserProfile = async (req, res) => {
    const { userId } = req.body;
    try {
        const userRef = db.collection('users').doc(userId);
        const doc = await userRef.get();

        if (!doc.exists) {
            return res.status(404).send('User not found.');
        }

        res.status(200).send(doc.data());
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = { registerUser, loginUser, updateUserProfile, showUserProfile }