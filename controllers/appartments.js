const jwt = require('jsonwebtoken')
const appartmentsRouter = require('express').Router()
const Appartment = require('../models/appartment')
const User = require('../models/user')
const Utils = require('./utils')

appartmentsRouter.get('/', async(request, response) => {
    
    const decodedToken = Utils.getDecodedToken(request)
    if(decodedToken == null)
    {
        return response.status(401).json({ error: 'Token missing or invalid' }) 
    }

    const appartments = await Appartment.find({ user : decodedToken.id })
    response.json(appartments.map(a => a.toJSON()))
})

appartmentsRouter.get('/:appartmentId', async(request, response) => {
    const decodedToken = Utils.getDecodedToken(request)
    if(decodedToken == null)
    {
        return response.status(401).json({ error: 'Token missing or invalid' }) 
    }

    const appartment = await Appartment.findOne({ _id : request.params.appartmentId})
    response.json(appartment.toJSON())
})

appartmentsRouter.post('/', async(request, response) => {

    const decodedToken = Utils.getDecodedToken(request)
    if(decodedToken == null)
    {
        return response.status(401).json({ error: 'Token missing or invalid' }) 
    }

    const appartment = new Appartment({
        title: request.body.title,
        url: request.body.url,
        address: request.body.address,
        free_date: request.body.free_date,
        user: decodedToken.id 
    })

    const savedAppartment = await appartment.save()
    response.json(savedAppartment)
})

appartmentsRouter.put('/:appartmentId', async(request, response) => {

    const decodedToken = Utils.getDecodedToken(request)
    if(decodedToken == null)
    {
        return response.status(401).json({ error: 'Token missing or invalid' }) 
    }


    const result = await Appartment.findByIdAndUpdate(request.params.appartmentId, request.body, {'new' : true})
    response.json(result.data)
})

appartmentsRouter.delete('/:appartmentId', async(request, response) => {
    
    const decodedToken = Utils.getDecodedToken(request)
    if(decodedToken == null)
    {
        return response.status(401).json({ error: 'Token missing or invalid' }) 
    }

    await Appartment.deleteOne({ _id : request.params.appartmentId})
    return response.status(200).json({ message: "successful" })
})

module.exports = appartmentsRouter
