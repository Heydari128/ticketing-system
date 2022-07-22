const {Schema, model} = require('mongoose')

const fileSchema = new Schema({
    fileId: {
        type: String,
        required: true
    },
    filename: {
        type: String,
        required: true
    },
    contentSize: {
        type: Number,
        required: true
    },
    contentType: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

module.exports = model('Attachment', fileSchema, 'attachments')
