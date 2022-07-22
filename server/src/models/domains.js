const {Schema, model} = require('mongoose')

const domainSchema = new Schema({
    caption: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})


module.exports = model('Domain', domainSchema, 'domains')
