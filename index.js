const express = require('express')
const { errorHandler } = require('./middleware/errorMiddleware.js')
const router = require('./routes/Routes.js')
const dotenv = require('dotenv').config()
const colors = require('colors')
const { connectDB } = require('./config/db.js')

const PORT = process.env.PORT || 5000

const app = express()
connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/', router)

app.use(errorHandler)

app.listen(PORT, () => {console.log(`Server is running in the server http://localhost:${PORT}`.bgYellow.underline)})