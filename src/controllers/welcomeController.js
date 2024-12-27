const taskListModel = require('../models/taskListModel')

const welcomeController = {
  
  // GET /
  index: (req, res) => {
    res.render('welcome')
  },

  // GET /taskLists
  show: (req, res) => {
    const tasks = taskListModel.getAllTasks()
    res.render('taskLists', { tasks })
  },

  // GET /createList
  create: (req, res) => {
    res.render('createList')
  },

  // POST /createList
  createList: (req, res) => {
    const title = req.body.title
    taskListModel.createList(title)
    
    res.redirect('/taskLists')
  },

  // POST /delete/:title
  delete: (req, res) => {
    const title = req.params.title

    taskListModel.delete(title)

    res.redirect('/taskLists')
  }
}

module.exports = welcomeController