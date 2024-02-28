import { useContext } from 'react';

import './todo-option.css';

import { TodoContext } from '../../context/todo-context';
import { TodoThemeContext } from '../../context/todo-theme-context';

const TodoOption = () => {

    const { todoList, typeFilter, cleanerTodo, changeTypeFilter } = useContext(TodoContext);
    const { todoTheme } = useContext(TodoThemeContext);

    const handlerClear = () => {
        cleanerTodo();
    }

    const handlerChange = (type) => {
        changeTypeFilter(type);
    }

    return (
        <section
            className={
                `todo-option--container
                ${(todoTheme === 'dark') ? 'todo-option--dark ' : 'todo-option--light'}`
            }
        >
            <aside>{todoList.length} items</aside>
            <aside>
                <span
                    className={`${(typeFilter === 'all') ? 'todo-option--active' : ''}`}
                    onClick={() => handlerChange('all')}>
                        All
                </span>
                <span
                    className={`${(typeFilter === 'active') ? 'todo-option--active' : ''}`}
                    onClick={() => handlerChange('active')}>
                        Active
                </span>
                <span
                    className={`${(typeFilter === 'completed') ? 'todo-option--active' : ''}`}
                    onClick={() => handlerChange('completed')}>
                        Completed
                </span>
            </aside>
            <aside
                onClick={handlerClear}>
                Clear completed
            </aside>
        </section>
    )
};

export default TodoOption;