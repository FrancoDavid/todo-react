
import { useContext, useState } from 'react';
import './todo-item.css'
import { TodoContext } from '../../context/todo-context';

const TodoItem = ({ item }) => {

    //  const [isActive, setActive] = useState(item.isActive);
    const { toggleTodo } = useContext(TodoContext);

    const handlerChange = () => {
        console.log(item);
        toggleTodo(item.id);
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
                <img src="/img/cross-svgrepo-com (1).svg" alt="Remove"/>
            </div>
        </section>
    );

};

export default TodoItem;