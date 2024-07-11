const { app } = require('./src/controllers/server.js')
const cors = require('cors')

// const { db } = require('./src/models/firebase.js')

require('./src/controllers/userController.js'); // This will register the /add-data route
const userController = require('./src/routes/userRoute.js')

app.use(cors())
app.use('/users', userController)


app.listen(8000, () => {
    console.log("the server is running successfully on port 8000 ")

})