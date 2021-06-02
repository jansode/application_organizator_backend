const jwt = require('jsonwebtoken')
const multer = require('multer')
const fs = require('fs')
const glob = require('glob')

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images')
    },
    filename: (req, file, callback) => {

        // Remove old appartment images
        const files = glob.sync('images/'+req.body.user+'-*') 
        files.forEach((f) =>{
            fs.unlinkSync(f)

        })

        // New appartment image
        let filetype = file.mimetype.split('/')[1]
        callback(null, req.body.user+'-'+req.body.appartment+'-'+Date.now()+'.'+filetype)
    }

})

const upload = multer({storage: storage})

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
        size: request.body.size,
        free_date: request.body.free_date,
        image: request.body.image,
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

appartmentsRouter.post('/:appartmentId/upload_image', upload.single('imageData'), async(request, response) => {

    const decodedToken = Utils.getDecodedToken(request)
    if(decodedToken == null)
    {
        return response.status(401).json({ error: 'Token missing or invalid' }) 
    }

    const result = await Appartment.findByIdAndUpdate(request.params.appartmentId, { image : request.file.path }, {'new' : true})
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
