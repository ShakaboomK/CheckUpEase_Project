const { app } = require('./src/controllers/server.js')

const { db } = require('./src/models/firebase.js')



app.listen(8000, () => {
    console.log("the server is running successfully ")

})