import './todo-header.css';

const TodoHeader = () => {
    return (
        <header>
            <h1>TODO</h1>
            <section>
                <img src="/img/moon-svgrepo-com.svg" alt="Dark mode"/>
                <img src="/img/sun-svgrepo-com.svg" alt="Light mode"/>
            </section>
        </header>
    );
}

export default TodoHeader;