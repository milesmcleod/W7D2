import { connect } from 'react-redux';
import TodoList from './todo_list';

// Actions
import {
  receiveTodos,
  receiveTodo,
  createTodo,
  fetchTodos,
  updateTodo,
  deleteTodo
} from '../../actions/todo_actions';

import { fetchSteps } from '../../actions/step_actions';

import { allTodos } from '../../reducers/selectors';

const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: state.errors,
  state
});

const mapDispatchToProps = dispatch => ({
  receiveTodos: () => dispatch(receiveTodos()),
  createTodo: (todo) => dispatch(createTodo(todo)),
  updateTodo: (todo) => dispatch(updateTodo(todo)),
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos()),
  fetchSteps: () => dispatch(fetchSteps())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
