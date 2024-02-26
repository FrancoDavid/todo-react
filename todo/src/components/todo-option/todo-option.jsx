import { useContext } from 'react';
import './todo-option.css';
import { TodoContext } from '../../context/todo-context';

const TodoOption = () => {

    const { todoList, cleanerTodo, changeTypeFilter } = useContext(TodoContext);

    const handlerClear = () => {
        cleanerTodo();
    }

    const handlerChange = (type) => {
        changeTypeFilter(type);
    }

    return (
        <section className="todo-option--container">
            <aside>{todoList.length} items</aside>
            <aside>
                <span
                    className='hand-pointer'
                    onClick={() => handlerChange('all')}>
                        All
                </span>
                <span
                    className='hand-pointer'
                    onClick={() => handlerChange('active')}>
                        Active
                </span>
                <span
                    className='hand-pointer'
                    onClick={() => handlerChange('completed')}>
                        Completed
                </span>
            </aside>
            <aside
                className='hand-pointer'
                onClick={handlerClear}>
                Clear completed
            </aside>
        </section>
    )
};

export default TodoOption;