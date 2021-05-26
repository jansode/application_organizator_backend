const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const usersRouter = require('./controllers/users')
const applicationsRouter = require('./controllers/applications')
const loginRouter = require('./controllers/login')

require('dotenv').config()

const db_user = process.env.DB_USER
const db_pass = process.env.DB_PASS
const db_name = process.env.DB_NAME

const MONGO_DB_URI = `mongodb+srv://${db_user}:${db_pass}@cluster0.d6w5m.mongodb.net/${db_name}?retryWrites=true&w=majority`

const mongoose_connect = async () => {

    try {
        await mongoose.connect(MONGO_DB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})

    } catch(error) {
        console.log(error)
    }

    mongoose.connection.once('open', () => {
    console.log('mongodb connection open')
    })

}

mongoose_connect()

app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/users', usersRouter)
app.use('/api/applications', applicationsRouter)
app.use('/api/login', loginRouter)

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

module.exports = app
