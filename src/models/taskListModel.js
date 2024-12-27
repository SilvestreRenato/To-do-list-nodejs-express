let tasklist = [
  { title: "Tarefas de Casa", completed: false },
  { title: "Tarefas do Trabalho", completed: false },
  { title: "Tarefa da Faculdade", completed: false }
  
]

// tasklist = [ { title: string, completed: boolean }, {}, {}, ... ] <-- Formato para as listas

taskListModel = {

  // Exibir todas as listas
  getAllTasks() {
    return tasklist
  },

  // Excluir uma Lista
  delete() {
    
  }
}

module.exports = taskListModel