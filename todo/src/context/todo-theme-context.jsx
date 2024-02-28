import { createContext, useState } from "react";

const TodoThemeContext = createContext();

const TodoThemeProvider = ({children}) => {
    const [todoTheme, setTodoTheme] = useState('dark');

    const changeTheme = (theme) => {
        setTodoTheme(theme);
    };

    return (
        <TodoThemeContext.Provider value={{todoTheme, changeTheme}}>
            {children}
        </TodoThemeContext.Provider>
    );
};

export {
    TodoThemeContext,
    TodoThemeProvider
}