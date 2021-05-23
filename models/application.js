const mongoose = require('mongoose')

const applicationSchema = new mongoose.Schema({
    title: String,
    url: String,
    location: String,
    end_date: Date,
    status: {
        type: String,
        enum: ['edit','sent'],
        default: 'edit'
    },
    cover_letter: Object,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

applicationSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Application = mongoose.model('Application', applicationSchema)
module.exports = Application

