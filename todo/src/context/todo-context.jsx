import React, { createContext, useState } from "react";

import { v4 as uuidv4 } from 'uuid';

const TodoContext = createContext();

const TodoProvider = ({children}) => {

    const [todoList, setTodoList] = useState([]);
    const [typeFilter, setTypeFilter] = useState('all');

    const addTodo = (newTodo) => {

        const textLower =  newTodo.charAt(0).toUpperCase() + newTodo.slice(1).toLowerCase();
        
        setTodoList([
            ...todoList,
            { 
                id: uuidv4(),
                isActive: false,
                text: textLower
            }
        ]);
    };

    const toggleTodo = (todoId) => {
        setTodoList(
            todoList.map(todo => {
                if (todo.id === todoId) {
                    return {
                        ...todo,
                        isActive: !todo.isActive,
                    };

                } else {
                    return todo;
                }
            })
        );
    };

    const removeTodo = (todoId) => {
        setTodoList(todoList.filter(todo => (todo.id !== todoId)));
    };

    const cleanerTodo = () => {
        setTodoList(
            todoList.map(todo => {
              return {
                ...todo,
                isActive: false
              };
            })
        );
    };

    const changeTypeFilter = (type, hola) => {
        setTypeFilter(type);
    };

    const changeOrderTodo = (prev, next) => {
        const list = [...todoList];
        const itemDrag = list[prev];

        list.splice(prev, 1);
        list.splice(next, 0, itemDrag);

        console.log(list);

        setTodoList([...list]);
    }

    return (
        <TodoContext.Provider value={{
            todoList,
            typeFilter,

            addTodo,
            toggleTodo,
            removeTodo,
            cleanerTodo,
            changeOrderTodo,

            changeTypeFilter
        }}>
            {children}
        </TodoContext.Provider>
    );
};


export {
    TodoContext,
    TodoProvider
}