import React from 'react'
import ReactDOM from 'react-dom'
import AppHeader from "./app-header";
import SearchPan from "./srch-panel";
import TodoList from "./todo-list";



const App = () => {

    const DataB = [
        {label: 'Drink tea', important: false, id:1},
        {label: 'Implement changes in app', important: true, id:2},
        {label: 'Make notes', important: false, id:3},
        {label: 'Buy groceries', important: false, id:4},

    ];


    return <div>
        <AppHeader/>
        <SearchPan/>
        <TodoList thtodo={DataB}/>
    </div>
}

ReactDOM.render(<App />, document.getElementById("root"));