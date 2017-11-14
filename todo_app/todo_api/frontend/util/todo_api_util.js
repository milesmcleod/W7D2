const TodoAPIUtil = {

  fetchTodos () {
    return $.ajax({
      method: 'GET',
      url: '/api/todos'
    });
  },

  createTodo (todo) {
    return $.ajax({
      method: 'POST',
      url: '/api/todos',
      data: {
        todo: todo
      }
    });
  },

  updateTodo(todo) {
    return $.ajax({
      method: 'PATCH',
      url: `/api/todos/${todo.id}`,
      data: {
        todo: todo
      }
    });
  },

  deleteTodo(todo) {
    return $.ajax({
      method: 'DELETE',
      url: `/api/todos/${todo.id}`,
      data: {
        todo: todo
      }
    });
  }

};

export default TodoAPIUtil;
