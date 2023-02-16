import React from 'react'
import ReactDOM from 'react-dom'
import AppHeader from "./cmpnents/app-header";
import TodoList from "./cmpnents/todo-list";
import SrchPanel from "./srch-panel";

import ItemStatusFilter from "./cmpnents/item-status-filter";
import './index.css';


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

        <TodoList todos={DataB} />
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));