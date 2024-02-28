import React, { useContext, useRef } from "react";

import { TodoContext } from "../../context/todo-context";

import TodoItem from "../todo-item/todo-item";
import TodoNotFound from "../todo-not-found/todo-not-found";

const TodoContainerItem = () => {

    const { todoList, typeFilter, changeOrderTodo } = useContext(TodoContext);

    const filteredTodoList = todoList.filter(item => {
            return (typeFilter === 'all') ||
                (typeFilter === 'active' && !item.isActive) || 
                (typeFilter === 'completed' && item.isActive);
    });

    let todoItemDrag = useRef();
    let todoItemDragOver = useRef();

    const handlerDragStart = (event, index) => {
        todoItemDrag.current = index;
    };

    const handlerDragEnd = (event, index) => {
        changeOrderTodo(todoItemDrag.current, todoItemDragOver.current);
    };

    const handlerDragEnter = (event, index) => {
        todoItemDragOver.current = index;
    }

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

                            onDragStart={(e) => handlerDragStart(e, index)}
                            onDragEnd={(e) => handlerDragEnd(e, index)}
                            onDragEnter={(e) => handlerDragEnter(e, index)}
                        />
                    ))
                )
            }
        </section>
    );
}

export default TodoContainerItem;