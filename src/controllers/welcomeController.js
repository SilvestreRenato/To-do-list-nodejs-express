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

  // GET /task-list/:title
  showList: (req, res) => {
    const title = req.params.title

    const taskList = taskListModel.getTaskListByTitle(title)

    res.render('task-list', { taskList })
  },

  // POST /createList
  createList: (req, res) => {
    const title = req.body.title
    taskListModel.createList(title)
    
    res.redirect('/taskLists')
  },

  // POST /complete/:title
  completeTask: (req, res) => {
    const { title, taskName } = req.params

    taskListModel.complete(title, taskName)

    res.redirect(`/task-list/${title}`)
  },

  // POST /delete/:title
  delete: (req, res) => {
    const title = req.params.title

    taskListModel.delete(title)

    res.redirect('/taskLists')
  }
}

module.exports = welcomeController