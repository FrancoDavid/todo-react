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

    const removeTodo = (todoId) => {
        setTodoList(todoList.filter(todo => (todo.id !== todoId)));
    }

    return (
        <TodoContext.Provider value={{todoList, addTodo, toggleTodo, removeTodo}}>
            {children}
        </TodoContext.Provider>
    );
};


export {
    TodoContext,
    TodoProvider
}