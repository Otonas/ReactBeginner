import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({todos, filterState, searchText, onDeleted, onToggleImportant, onToggleDone}) => {

    const todoss = searchText === '' ? todos : todos.filter(i => i.label.indexOf(searchText) >= 0);

    const todosf = filterState === 'all' ? todoss : todoss.filter(i => filterState === 'done' ? i.done : !i.done);

    const elements = todosf
        .map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className="list-group-item">
                <TodoListItem {...itemProps}
                              onDeleted={() => onDeleted(id)}
                              onToggleImportant={() => onToggleImportant(id)}
                              onToggleDone={() => onToggleDone(id)}
                />
            </li>
        );
        })

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};

export default TodoList;