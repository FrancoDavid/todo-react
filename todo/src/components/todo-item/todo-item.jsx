
import './todo-item.css'

const TodoItem = ({ item }) => {
    return (
        <div className="todo-item--container">
            <div>
                <input type="checkbox"></input>
                <span>{item.text}</span>
            </div>
            <div>
                <img src="/img/cross-svgrepo-com (1).svg" alt="Remove"/>
            </div>
        </div>
    );

};

export default TodoItem;