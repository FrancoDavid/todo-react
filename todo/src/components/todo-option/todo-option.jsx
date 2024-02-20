import './todo-option.css';


const TodoOption = () => {
    return (
        <section>
            <aside>5 items</aside>
            <aside>
                <span>All</span>
                <span>Active</span>
                <span>Completed</span>
            </aside>
            <aside>
                Clear completed
            </aside>
        </section>
    )
};

export default TodoOption;