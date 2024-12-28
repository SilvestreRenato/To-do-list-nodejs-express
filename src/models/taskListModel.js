let tasklist = [
  { title: "Tarefas de Casa", tasks: [{taskName: "varrer a sala", completed: false}, {taskName: "Lavar o banheiro", completed: false}], completed: false },
  { title: "Tarefas do Trabalho", tasks: [], completed: false },
  { title: "Tarefa da Faculdade", tasks: [], completed: false }
]

// tasklist = [ { title: string, completed: boolean }, {}, {}, ... ] <-- Formato para as listas
// tasks = [ {taskName, completed} ]


taskListModel = {

  // Exibir todas as listas
  getAllTasks() {
    return tasklist
  },

  // Encontrar tarefa pelo titulo
  getTaskListByTitle(title) {
    const listOfTasks = tasklist.find(list => list.title === title)
    return listOfTasks
  },

  // Cria uma lista de tarefas
  createList(title) {
    const newList = {
      title: title,
      tasks: [],
      completed: false
    }
    tasklist.push(newList)
    return newList
  },

  // Cria uma nova tarefa
  createTask(title, newTaskName) {
    const list = tasklist.find(task => task.title === title)

    const newTask = {
      taskName: newTaskName,
      completed: false
    }

    list.tasks.push(newTask)
  },

  // Completar Tarefa
  complete(title, taskName) {
    const list = tasklist.find(task => task.title === title)

    const task = list.tasks.find(t => t.taskName === taskName)

    task.completed = true
  },

  // Excluir uma Lista
  delete(title) {
    tasklist = tasklist.filter(task => task.title !== title)
  }
}

module.exports = taskListModel