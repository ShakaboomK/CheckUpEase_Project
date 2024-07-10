const { app } = require('./controllers/server')

const { db } = require('./models/firebase')



app.listen(8000, () => {
    console.log("the server is running successfully ")

})