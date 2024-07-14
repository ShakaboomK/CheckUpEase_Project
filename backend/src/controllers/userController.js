const { db } = require('../config/firebase');


const addUser = async (req, res) => {
    try {
        const user = req.body;
        const userRef = await db.collection('users').add(user);
        res.status(201).json({ id: userRef.id });
    } catch (error) {
        res.status(500).send('Iternal Server Error, please try again later')
    }

}
const getUser = async (req, res) => {
    try {
        const prefix = req.params.userName;
        const endPrefix = prefix + '\uf8ff'; // Firestore's highest possible UTF-8 character

        const userRef = await db.collection('users')
            .where('name', '>=', prefix)
            .where('name', '<', endPrefix)
            .get();

        if (userRef.empty) {
            res.status(404).send('User not found');
        } else {
            let users = [];
            userRef.forEach(doc => {
                users.push(doc.data());
            });
            res.status(200).json(users);
        }
    }
    catch (error) {
        res.status(500).send('Server Error')
    }
}

module.exports = { getUser, addUser }