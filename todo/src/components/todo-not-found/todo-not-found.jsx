
import './todo-not-found.css';

const TodoNotFound = ({ theme }) => {

    return (
        <section
            className={
                `todo-not-found--container
                ${(theme === 'dark') ? 'todo-not-found--dark': 'todo-not-found--light'}`
            }
        >
            <p>No items found</p>
        </section>
    );
}

export default TodoNotFound;