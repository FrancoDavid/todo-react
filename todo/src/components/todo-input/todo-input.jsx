
import { useContext, useState } from 'react';

import { TodoContext } from '../../context/todo-context';
import { TodoThemeContext } from '../../context/todo-theme-context';

import './todo-input.css'

const TodoInput = () => {

    const { addTodo } = useContext(TodoContext);
    const { todoTheme } = useContext(TodoThemeContext);

    const [todoItemNewName, setTodoNew] = useState('');

    const handlerEnter = (event) => {
        if (event.key === 'Enter' && todoItemNewName) {
            addTodo(todoItemNewName);
            setTodoNew("");
        }
    }

    const handlerChange = (event) => {
        setTodoNew(event.target.value);
    }

    return (

        <aside
            className={
                `todo-input--container 
                ${(todoTheme === 'dark') ? 'todo-input--dark': 'todo-input--light'}`
            }
        >
            <input
                className={
                    `${(todoTheme === 'dark') ? 'todo-input--dark': 'todo-input--light'}`
                }
                
                type="text"
                placeholder='Enter to create new job...'
                maxLength={80}
                value={todoItemNewName}
                
                onKeyDown={handlerEnter}
                onChange={handlerChange}>
            </input>
        </aside>
    );
}

export default TodoInput;