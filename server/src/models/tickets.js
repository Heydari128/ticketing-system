const {Schema, model, Types} = require('mongoose')
const {TICKET_STATUSES, DEFAULT_TICKET_STATUS} = require('../config/defaultConsts')

const ticketSchema = new Schema({
    subject: {
        type: String,
        required: true,
    },
    contentBody: {
        type: String,
        html: true,
    },
    status: {
        type: String,
        enum: Object.keys(TICKET_STATUSES),
        default: DEFAULT_TICKET_STATUS,
        required: true
    },
    attachments: [{
        ref: 'Attachment',
        type: Types.ObjectId
    }],
    domain: {
        ref: 'Domain',
        type: Types.ObjectId
    },
    comments: [{
        ref: 'TicketComment',
        type: Types.ObjectId
    }],
    userId: {
        ref: 'User',
        type: Types.ObjectId
    },
    closedAt: Date
}, {
    timestamps: true
})

module.exports = model('Ticket', ticketSchema, 'tickets')
