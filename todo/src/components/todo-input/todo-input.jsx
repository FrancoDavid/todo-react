
import { useContext, useState } from 'react';

import { TodoContext } from '../../context/todo-context';

import './todo-input.css'

const TodoInput = () => {

    const { addTodo } = useContext(TodoContext);
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
        <aside className='todo-input--container'>
            <input
                type="text"
                placeholder='Enter to create new job...'
                value={todoItemNewName}
                onKeyDown={handlerEnter}
                onChange={handlerChange}>
            </input>
        </aside>
    );
}

export default TodoInput;