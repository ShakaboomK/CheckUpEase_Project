const { app } = require('./src/controllers/server.js')

// const { db } = require('./src/models/firebase.js')

require('./src/controllers/user'); // This will register the /add-data route


app.listen(8000, () => {
    console.log("the server is running successfully on port 8000 ")

})