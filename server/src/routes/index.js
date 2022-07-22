const express = require('express')
const router = express.Router()
const userRoutes = require('./userRoutes')
const ticketRoutes = require('./ticketRoutes')
const ticketCommentsRoutes = require('./ticketCommentsRoutes')
const domainRoutes = require('./domainRoutes')

router.use('/users', userRoutes)
router.use('/tickets', ticketRoutes)
router.use('/tickets-comments', ticketCommentsRoutes)
router.use('/domains', domainRoutes)

module.exports = router
