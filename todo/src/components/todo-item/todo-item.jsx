
import { useContext } from 'react';
import './todo-item.css'
import { TodoContext } from '../../context/todo-context';

const TodoItem = ({ item }) => {
    const { toggleTodo, removeTodo } = useContext(TodoContext);

    const handlerChange = () => {
        toggleTodo(item.id);
    }

    const handlerClick = () => {
        removeTodo(item.id);
    }

    return (
        <section className="todo-item--container">
            <div>
                <input
                    type="checkbox"
                    value={item.isActive}
                    onChange={handlerChange}>
                </input>
                <span>
                    {item.text}
                </span>
            </div>
            <div>
                <img 
                    src="/img/cross-svgrepo-com (1).svg"
                    alt="Remove"
                    
                    onClick={handlerClick}/>
            </div>
        </section>
    );

};

export default TodoItem;