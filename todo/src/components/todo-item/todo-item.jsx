
import { useContext } from 'react';

import './todo-item.css'

import { TodoContext } from '../../context/todo-context';

const TodoItem = ({ item, position, onDragStart, onDragEnter, onDragEnd, theme }) => {
    
    const { toggleTodo, removeTodo } = useContext(TodoContext);

    const handlerChange = () => {
        toggleTodo(item.id);
    }

    const handlerClick = () => {
        removeTodo(item.id);
    }

    return (
        <section
            className={
                `todo-item--container
                ${(position === 0) ? 'todo-item--rounded' : ''} 
                ${(theme === 'dark') ? 'todo-item--dark' : 'todo-item--light'}`
            }
            
            draggable

            onDragStart={onDragStart}
            onDragEnter={onDragEnter}
            onDragEnd={onDragEnd}
        >
            <div>
                <input
                    type="checkbox"
                    checked={item.isActive}
                    onChange={handlerChange}>
                </input>
                <span className={item.isActive ? 'todo-item--overline' : ''}>
                    {item.text}
                </span>
            </div>
            <div>
                <img
                    className='hand-pointer'
                    src="/img/cross-svgrepo-com (1).svg"
                    alt="Remove"
                    
                    onClick={handlerClick}/>
            </div>
        </section>
    );

};

export default TodoItem;