const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const resourcesRoutes = require('./routes/resources')
const connectDB = require('./config/db')

dotenv.config({path: './config/config.env'})

const PORT = process.env.PORT || 3001

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// routes

app.use('/api/resources', resourcesRoutes)

// connect to db
connectDB()
  .then(connection => {
    app.listen(process.env.PORT || PORT, () => {
      console.log(`MongoDB connected, listening at PORT ${process.env.PORT}`)
    })
  })
