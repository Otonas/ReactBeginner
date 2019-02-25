import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
        ],
        filterState: 'all',
        searchText: ''
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
            console.log(newArray);
            return {

                todoData: newArray
            };
        });
    };

    addItem = (text) => {
        const newItem =
            this.createTodoItem(text);
        this.setState(({todoData}) => {
            const newArray = [
                ...todoData, newItem
            ];
            return {
                todoData: newArray
            };
        });
    };

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {
            ...oldItem,
            [propName]: !oldItem[propName]
        };
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    };

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    };

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    };

    onFilterAllClick = () => {
        this.setState({
            filterState: 'all'
        });
    };

    onFilterActiveClick = () => {
        this.setState({
            filterState: 'active'
        });
    };

    onFilterDoneClick = () => {
        this.setState({
            filterState: 'done'
        });
    };

    onSearch = (e) => {
        this.setState({
            searchText: e.target.value
        });
    };

    render() {


        const {todoData, filterState, searchText} = this.state;

        const doneCount = todoData
            .filter((el) => el.done).length;

        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">

                <AppHeader toDo={todoCount} done={doneCount}/>

                <div className="top-panel d-flex">

                    <SearchPanel
                        onSearch={this.onSearch}
                    />

                    <ItemStatusFilter
                        onFilterAllClick={this.onFilterAllClick}
                        onFilterActiveClick={this.onFilterActiveClick}
                        onFilterDoneClick={this.onFilterDoneClick}
                        classFilterAll={filterState === 'all' ? 'btn btn-info' : 'btn btn-outline-secondary'}
                        classFilterActive={filterState === 'active' ? 'btn btn-info' : 'btn btn-outline-secondary'}
                        classFilterDone={filterState === 'done' ? 'btn btn-info' : 'btn btn-outline-secondary'}
                    />

                </div>

                <TodoList todos={todoData}
                          filterState={filterState}
                          searchText={searchText}
                          onDeleted={this.deleteItem}
                          onToggleImportant={this.onToggleImportant}
                          onToggleDone={this.onToggleDone}
                />

                <ItemAddForm onItemAdded={this.addItem}/>

            </div>
        );
    }


};

