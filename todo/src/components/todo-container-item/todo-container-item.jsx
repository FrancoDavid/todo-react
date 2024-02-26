import React, { useContext } from "react"

import { TodoContext } from "../../context/todo-context";

import TodoItem from "../todo-item/todo-item";

const TodoContainerItem = () => {

    const { todoList } = useContext(TodoContext);

    return (
        <section>
            { todoList.map((item, index) => (
                <TodoItem
                    key={index}
                    item={item}
                />
            ))}
        </section>
    );
}

export default TodoContainerItem;