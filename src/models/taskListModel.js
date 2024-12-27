let tasklist = [
  { title: "Tarefas de Casa", task: [], completed: false },
  { title: "Tarefas do Trabalho", task: [], completed: false },
  { title: "Tarefa da Faculdade", task: [], completed: false }
  
]

// tasklist = [ { title: string, completed: boolean }, {}, {}, ... ] <-- Formato para as listas

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

  // Excluir uma Lista
  delete() {
    
  }
}

module.exports = taskListModel