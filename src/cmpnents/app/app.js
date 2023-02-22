import React from "react";

import AppHeader from "../app-header";
import SearchPan from "../search-pan/srch-panel";
import TodoList from "../todo-list/todo-list";
import ItemStatusFilter from "../item-status-filter";
import './app.css'
import SrchPanel from "../search-pan/srch-panel";

const App = () => {
    const DataB = [
        {label: 'Drink tea', important: false, id:1},
        {label: 'Implement changes in app', important: true, id:2},
        {label: 'Make notes', important: false, id:3},
        {label: 'Buy groceries', important: false, id:4},

    ];

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SrchPanel />
                <ItemStatusFilter />
            </div>

            <TodoList thtodo={DataB} />
        </div>
    )
}

export default App;