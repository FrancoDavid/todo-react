import React from 'react';

import './App.css';

import TodoHeader from './components/todo-header/todo-header';
import TodoInput from './components/todo-input/todo-input';
import TodoOption from './components/todo-option/todo-option';

import { TodoProvider } from './context/todo-context';
import TodoContainerItem from './components/todo-container-item/todo-container-item';

function App() {
  return (
    <TodoProvider>
      <main>
        <section className='App-container--middle'>
            <TodoHeader />
            <TodoInput />

            <TodoContainerItem />
            <TodoOption />
        </section>
      </main>
    </TodoProvider>
  );
}

export default App;
