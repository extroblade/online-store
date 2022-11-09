require('dotenv').config()

const express = require('express')
const app = express()
const PORT = process.env.PORT
const sequelize = require('./db')

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`started on ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start();


