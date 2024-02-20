import './App.css';
import TodoHeader from './components/todo-header/todo-header';

function App() {
  return (
    <main>
      <section className='App-container--top'></section>
      <section className='App-container--bottom'></section>

      <aside className='App-container--middle'>
          <TodoHeader />
          {/* <section>
              <h1>INPUT</h1>
              <h1>TABLA</h1>
              <h1>OPTIONES</h1>
          </section>
          <section>
            <h1>FOOTER</h1>
          </section> */}
      </aside>
    </main>
  );
}

export default App;
