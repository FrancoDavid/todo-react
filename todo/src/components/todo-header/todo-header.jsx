import { useContext } from 'react';
import './todo-header.css';
import { TodoThemeContext } from '../../context/todo-theme-context';

const TodoHeader = () => {

    const { todoTheme, changeTheme } = useContext(TodoThemeContext);

    const handlerClick = (theme) => {
        changeTheme(theme);
    };

    return (
        <header>
            <h1>TODO</h1>
            <section>
                {
                    (todoTheme === 'dark') ? (
                        <img
                            src="/img/sun-2-svgrepo-com.svg"
                            alt="Light mode"
                            onClick={() => handlerClick('light')}
                        />
                    ): (
                        <img
                            src="/img/moon-svgrepo-com (1).svg"
                            alt="Dark mode"
                            onClick={() => handlerClick('dark')}
                        />
                    )
                }
            </section>
        </header>
    );
}

export default TodoHeader;