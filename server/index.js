require('dotenv').config()

const express = require('express')
const PORT = process.env.PORT

const sequelize = require('./db')
const models = require('./models/models')

const cors = require('cors')
const fileUpload = require('express-fileupload')
const app = express()
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)



app.use(errorHandler)



const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`started on localhost:${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start();


