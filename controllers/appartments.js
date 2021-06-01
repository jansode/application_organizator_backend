const jwt = require('jsonwebtoken')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images')
    },
    filename: (req, file, callback) => {
        let filetype = file.mimetype.split('/')[1]
        callback(null, req.body.user+'-'+req.body.appartment+'.'+filetype)
    }
})
const upload = multer({storage: storage}).single('imageData')

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

const uploadAsync = (req,res) => {
    return new Promise((resolve,reject) =>{
        upload(req,res, (error) => {
            if(error !== undefined)
            {
                return reject(error)
            }
            resolve()
        })
    })
}


appartmentsRouter.post('/:appartmentId/upload_image', uploadAsync, async(request, response) => {

    const decodedToken = Utils.getDecodedToken(request)
    if(decodedToken == null)
    {
        return response.status(401).json({ error: 'Token missing or invalid' }) 
    }

    /*
    if(!request.file)
    {
        return response.status(400).json({ error: 'Missing image file.'}) 
    }
    **/

    try 
    {
        await uploadAsync(req,res)
    }
    catch(error)
    {
        return response.status(500).send({error: 'File upload failed.'})
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
