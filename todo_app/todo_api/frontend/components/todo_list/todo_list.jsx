import React from 'react';
// Components
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {

  render() {
    const {
      todos,
      errors,
      createTodo,
      receiveTodo,
      deleteTodo,
      updateTodo,
      fetchSteps
    } = this.props;
    const todoItems = todos.map(todo => (
        <TodoListItem
          key={`todo-list-item${todo.id}`}
          todo={todo}
          receiveTodo={ receiveTodo }
          updateTodo={ updateTodo }
          deleteTodo={ deleteTodo }/>
      )
    );

    return(
      <div>
        <ul className="todo-list">
          { todoItems }
        </ul>
        <TodoForm
          createTodo={ createTodo }
          errors={ errors }/>
      </div>
    );
  }

  componentDidMount () {
    this.props.fetchTodos();
    this.props.fetchSteps();
  }
}

export default TodoList;
