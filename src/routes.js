const express = require('express')
const welcomeController = require('./controllers/welcomeController')

const router = express.Router()

// Rota inicial
router.get('/', welcomeController.index)

module.exports = router