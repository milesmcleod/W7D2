import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { fetchTodos, createTodo } from './actions/todo_actions';
import { fetchSteps } from './actions/step_actions';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);
  window.store = store;
  window.fetchTodos = fetchTodos;
  window.createTodo = createTodo;
  window.fetchSteps = fetchSteps;
  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
