const express = require('express')
const app = express()


app.use(express.json());
app.get('/start', (req, res) => {
    res.send("This is hello from the start end point")
})


module.exports = { app };
