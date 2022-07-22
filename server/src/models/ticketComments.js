const {Schema, model, Types} = require('mongoose')

const commentSchema = new Schema({
    contentBody: {
        type: String,
        required: true
    },
    userId: {
        ref: 'User',
        type: Types.ObjectId
    },
    ticketId: {
        ref: 'Ticket',
        type: Types.ObjectId
    },
    attachments: [{
        ref: 'Attachment',
        type: Types.ObjectId
    }]
}, {
    timestamps: true
})


module.exports = model('TicketComment', commentSchema, 'ticketComments')
