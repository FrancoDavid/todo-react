import './App.css';

import TodoHeader from './components/todo-header/todo-header';
import TodoInput from './components/todo-input/todo-input';
import TodoItem from './components/todo-item/todo-item';
import TodoOption from './components/todo-option/todo-option';
import { TodoProvider } from './context/todo-context';

function App() {
  return (
    <TodoProvider>
      <main>
        <section className='App-container--middle'>
            <TodoHeader />
            <TodoInput />

            <TodoItem />
            <TodoOption />
        </section>
      </main>
    </TodoProvider>
  );
}

export default App;
