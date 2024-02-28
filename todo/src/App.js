import React, { useContext } from 'react';

import './App.css';

import TodoHeader from './components/todo-header/todo-header';
import TodoInput from './components/todo-input/todo-input';
import TodoOption from './components/todo-option/todo-option';

import { TodoProvider } from './context/todo-context';
import TodoContainerItem from './components/todo-container-item/todo-container-item';
import { TodoThemeProvider } from './context/todo-theme-context';

function App() {
  return (
    <TodoThemeProvider>
      <main>
        <section className='app-container--middle'>
          <TodoProvider>
              <TodoHeader />
              <TodoInput />

              <TodoContainerItem />
              <TodoOption />
          </TodoProvider>
        </section>
      </main>
    </TodoThemeProvider>
  );
}

export default App;
