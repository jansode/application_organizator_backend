const mongoose = require('mongoose')

const appartmentSchema = new mongoose.Schema({
    title: String,
    url: String,
    address: String,
    rooms: String,
    rent: Number, 
    size: Number,
    free_date: Date,
    image: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

appartmentSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Appartment = mongoose.model('Appartment', appartmentSchema)
module.exports = Appartment

