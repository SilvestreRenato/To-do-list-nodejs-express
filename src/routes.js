const express = require('express')
const welcomeController = require('./controllers/welcomeController')

const router = express.Router()

// Rota inicial
router.get('/', welcomeController.index)
router.get('/taskLists', welcomeController.show)

module.exports = router