const express = require('express')
const welcomeController = require('./controllers/welcomeController')

const router = express.Router()

// Rota inicial
router.get('/', welcomeController.index)

// Exibe as Listas
router.get('/taskLists', welcomeController.show)

// Exibe o formulario para criação de lista
router.get('/createList', welcomeController.create)

// Cria a nova lista
router.post('/createList', welcomeController.createList)

// Exclui Lista
router.post('/delete/:title', welcomeController.delete)

module.exports = router