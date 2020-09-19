import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList'
import useTodo from './hooks/useTodo'

function App() {

  const {todos} = useTodo();

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
