import React, { createContext, useState } from "react";

const TodoContext = createContext();

const TodoProvider = ({children}) => {

    const [todoList, setTodoList] = useState([]);

    const addTodo = (newTodo) => {
        setTodoList([
            ...todoList,
            { id: 1, isActive: false, text: newTodo }
        ]);
    };

    return (
        <TodoContext.Provider value={{todoList, addTodo}}>
            {children}
        </TodoContext.Provider>
    );
};


export {
    TodoContext,
    TodoProvider
}