import React, { useContext } from "react"

import { TodoContext } from "../../context/todo-context";

import TodoItem from "../todo-item/todo-item";

const TodoContainerItem = () => {

    const { todoList, typeFilter } = useContext(TodoContext);

    const filteredTodoList = todoList.filter(item => {
            return (typeFilter === 'all') ||
                (typeFilter === 'active' && !item.isActive) || 
                (typeFilter === 'completed' && item.isActive);
    });

    return (
         <section>
            {
                filteredTodoList.map((item, index) => (
                    <TodoItem
                        key={index}
                        item={item}
                    />
                ))
            }
        </section>
    );
}

export default TodoContainerItem;