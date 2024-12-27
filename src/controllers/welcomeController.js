const taskListModel = require('../models/taskListModel')

const welcomeController = {
  
  index: (req, res) => {
    res.render('welcome')
  },

  show: (req, res) => {
    const tasks = taskListModel.getAllTasks()
    res.render('taskLists', { tasks })
  }
}

module.exports = welcomeController