import React from 'react';
import './App.scss';
import { TodoInput, TodoList, Alert } from './components';

export const App = () => {
  const localTodos = localStorage.getItem('todos');

  const [alert, setAlert] = React.useState({
    error: false,
    success: false,
  });

  let [todos, setTodos] = React.useState(
    localTodos ? JSON.parse(localTodos) : []
  );

  return (
    <>
      <div className="container">
        <TodoInput todos={todos} setTodos={setTodos} setAlert={setAlert} />
        <TodoList todos={todos} setTodos={setTodos} setAlert={setAlert} />
      </div>
      <Alert alert={alert} />
    </>
  );
};
