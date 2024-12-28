let tasklist = [
  { title: "Tarefas de Casa", taskArr: [{taskName: "varrer a sala", completed: false}, {taskName: "Lavar o banheiro", completed: false}], completed: false },
  { title: "Tarefas do Trabalho", taskArr: [], completed: false },
  { title: "Tarefa da Faculdade", taskArr: [], completed: false }
]

// tasklist = [ { title: string, completed: boolean }, {}, {}, ... ] <-- Formato para as listas
// taskArr = [ {taskName, completed} ]


taskListModel = {

  // Exibir todas as listas
  getAllTasks() {
    return tasklist
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

  // Encontrar tarefa pelo titulo
  getTaskListByTitle(title) {
    const listOfTasks = tasklist.find(list => list.title === title)
    return listOfTasks
  },

  // Completar Tarefa
  complete(title, taskName) {
    const list = tasklist.find(task => task.title === title)

    const task = list.taskArr.find(t => t.taskName === taskName)

    task.completed = true
  },

  // Excluir uma Lista
  delete(title) {
    tasklist = tasklist.filter(task => task.title !== title)
  }
}

module.exports = taskListModel