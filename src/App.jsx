import React from 'react';
import './App.scss';
import { TodoInput, TodoList } from './components';

export const App = () => {
  const localTodos = localStorage.getItem('todos');
  let [todos, setTodos] = React.useState(
    localTodos ? JSON.parse(localTodos) : []
  );

  return (
    <div className="container">
      <TodoInput todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};
