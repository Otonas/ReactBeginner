import React from "react";

import TodoListitem from  './todo-list-item';

const TodoList = () => {
    const items = ['Drink Coffee', 'Build Awesome App']
    return (
        <ul>
            <li><TodoListitem label="Drink Coffee"/></li>
            <li><TodoListitem
                label="Build React App"
            important /></li>
        </ul>
    );
};

export default TodoList;