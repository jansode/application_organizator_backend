const jwt = require('jsonwebtoken')
const applicationsRouter = require('express').Router()
const Application = require('../models/application')
const User = require('../models/user')
const Utils = require('./utils')

applicationsRouter.post('/', async(request, response) => {

    const decodedToken = Utils.getDecodedToken(request)
    if(decodedToken == null)
    {
        return response.status(401).json({ error: 'Token missing or invalid' }) 
    }

    const application = new Application({
        title: request.body.title,
        url: request.body.url,
        location: request.body.location,
        end_date: request.body.end_date,
        status: request.body.status,
        cover_letter: request.body.cover_letter,
        user: decodedToken.id 
    })

    const savedApplication = await application.save()
    response.json(savedApplication)
})

applicationsRouter.get('/', async(request, response) => {
    
    const decodedToken = Utils.getDecodedToken(request)
    if(decodedToken == null)
    {
        return response.status(401).json({ error: 'Token missing or invalid' }) 
    }

    const applications = await Application.find({ user : decodedToken.id })

    response.json(applications.map(a => a.toJSON()))
})

applicationsRouter.get('/:applicationId', async(request, response) => {
    const decodedToken = Utils.getDecodedToken(request)
    if(decodedToken == null)
    {
        return response.status(401).json({ error: 'Token missing or invalid' }) 
    }

    const application = await Application.findOne({ _id : request.params.applicationId })
    response.json(application.toJSON())
})

applicationsRouter.delete('/:applicationId', async(request, response) => {
    
    const decodedToken = getDecodedToken(request)
    if(decodedToken == null)
    {
        return response.status(401).json({ error: 'Token missing or invalid' }) 
    }

    await Application.deleteOne({ _id : request.params.applicationId })
    return response.status(200).json({ message: "successful" })
})

module.exports = applicationsRouter
