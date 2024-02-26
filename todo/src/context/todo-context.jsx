import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const TodoContext = createContext();

const TodoProvider = ({children}) => {

    const [todoList, setTodoList] = useState([]);

    const addTodo = (newTodo) => {
        setTodoList([
            ...todoList,
            { 
                id: uuidv4(),
                isActive: false,
                text: newTodo
            }
        ]);
    };

    const toggleTodo = (todoId) => {
        setTodoList(
            todoList.map(todo => {
                if (todo.id === todoId) {
                    return {
                        ...todo,
                        isActive: !todo.isActive
                    };

                } else {
                    return todo;
                }
            })
        );
    }

    return (
        <TodoContext.Provider value={{todoList, addTodo, toggleTodo}}>
            {children}
        </TodoContext.Provider>
    );
};


export {
    TodoContext,
    TodoProvider
}