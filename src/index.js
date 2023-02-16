import React from 'react'
import ReactDOM from 'react-dom'
import AppHeader from "./app-header";
import SearchPan from "./srch-panel";
import TodoList from "./todo-list";

const App = () => {

    const DataB = [
        {label: 'Drink tea', important: false},
        {label: 'Implement changes in app', important: true},
        {label: 'Make notes', important: false},
        {label: 'Buy groceries', important: false},

    ];


    return <div>
        <AppHeader/>
        <SearchPan/>
        <TodoList thtodo={DataB}/>
    </div>
}

ReactDOM.render(<App />, document.getElementById("root"));