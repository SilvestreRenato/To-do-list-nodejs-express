const express = require('express')
const welcomeController = require('./controllers/welcomeController')

const router = express.Router()

// Rota inicial
router.get('/', welcomeController.index)

// Exibe as Listas
router.get('/taskLists', welcomeController.show)

// Exibe tarefas de uma lista
router.get('/task-list/:title', welcomeController.showList)

// Exibe o formulario para criação de lista
router.get('/createList', welcomeController.create)

// Cria a nova lista
router.post('/createList', welcomeController.createList)

// Marca um tarefa da lista com completa
router.post('/complete/:title/:taskName', welcomeController.completeTask)

// Exclui Lista
router.post('/delete/:title', welcomeController.delete)

module.exports = router