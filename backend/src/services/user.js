const User = require('../models/user')

const addUser = async (req, res) => {
    try {
        const data = req.body;
        const user = new User(data);
        await user.save();
        res.status(201).send({ id: user.id });
    } catch (error) {
        console.error('Error adding user: ', error);
        res.status(500).send('Error adding user');
    }
}
const getUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        if (!user) {
            res.status(404).send('User not found');
        } else {
            res.send(user);
        }
    } catch (error) {
        console.error('Error getting user: ', error);
        res.status(500).send('Error getting user');
    }
}

module.exports = { addUser, getUser };