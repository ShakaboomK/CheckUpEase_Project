const { Firestore } = require('@google-cloud/firestore')
const firestore = new Firestore();

const { Schema, Model } = require('firestore-odm')

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
    mobileNumber: { type: Number, }
})

const User = new Model('Users', userSchema);

module.exports = { User }

