const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')
const Application = require('../models/application')
const Utils = require('./utils')

usersRouter.post('/', async(request, response) => {

    const saltRounds = 10
    const hash = await bcrypt.hash(request.body.password, saltRounds)

    const user = new User({
        username: request.body.username,
        passwordHash: hash,
        applications: [] 
    })

    const savedUser = await user.save()
    response.json(savedUser)
})

usersRouter.get('/', async(request, response) => {

    const decodedToken = Utils.getDecodedToken(request)
    if(decodedToken == null)
    {
        return response.status(401).json({ error: 'Token missing or invalid' }) 
    }

    const users = await User
        .find({}).populate('application')

    response.json(users.map(u => u.toJSON()))
})

usersRouter.get('/from_token', async(request, response) => {

    const decodedToken = Utils.getDecodedToken(request)
    if(decodedToken == null)
    {
        return response.status(401).json({ error: 'Token missing or invalid' }) 
    }

    const user = await User.findOne({ _id : decodedToken.id})
    response.json(user)
})

module.exports = usersRouter
