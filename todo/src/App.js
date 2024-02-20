import './App.css';

import TodoHeader from './components/todo-header/todo-header';
import TodoInput from './components/todo-input/todo-input';
import TodoItem from './components/todo-item/todo-item';
import TodoOption from './components/todo-option/todo-option';

function App() {
  return (
    <main>
      {/* <section className='App-container--top'></section>
      <section className='App-container--bottom'></section> */}

      <section className='App-container--middle'>

          <TodoHeader />
          <TodoInput />

          <TodoItem />
          <TodoOption />

      </section>
    </main>
  );
}

export default App;
