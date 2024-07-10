const express = require('express')
const app = express()
const port = 8000
const { db } = require('../models/firebase')


app.get('/start', (req, res) => {
    res.send("This is hello from the start end point")
})

app.listen(port, () => {
    try {
        console.log(`Server is running on port ${port} successfully`)
    } catch (error) {
        console.log(error);
    }

})
