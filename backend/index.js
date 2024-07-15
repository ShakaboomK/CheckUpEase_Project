const { app } = require('./src/controllers/server.js')
const cors = require('cors')

const { db } = require('./src/config/firebase.js')


const userRoute = require('./src/routes/userRoute.js')
const diagnosticCenterRoute = require('./src/routes/diagnosticcenter.js')

app.use(cors())
app.use('/user', userRoute)
app.use('/diag-user', diagnosticCenterRoute)


app.listen(8000, () => {
    console.log("the server is running successfully on port 8000 ")

})