const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

const usersRouter = require('./controllers/users')
const applicationsRouter = require('./controllers/applications')
const loginRouter = require('./controllers/login')

const MONGO_DB_URI = 'mongodb+srv://jsoderbe:test@cluster0.d6w5m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(MONGO_DB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})

const connection = mongoose.connection

connection.once('open', () => {
    console.log('mongodb connection open')
})

app.use(express.json())
app.use(cors())
app.use('/api/users', usersRouter)
app.use('/api/applications', applicationsRouter)
app.use('/api/login', loginRouter)

module.exports = app
