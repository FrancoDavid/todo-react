import React, { useContext } from "react"

import { TodoContext } from "../../context/todo-context";

import TodoItem from "../todo-item/todo-item";
import TodoNotFound from "../todo-not-found/todo-not-found";

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
                filteredTodoList.length === 0 ? (
                    <TodoNotFound />
                ) :  (
                    filteredTodoList.map((item, index) => (
                        <TodoItem
                            key={index}
                            item={item}
                            position={index}
                        />
                    ))
                )
            }
        </section>
    );
}

export default TodoContainerItem;