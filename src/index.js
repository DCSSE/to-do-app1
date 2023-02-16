import React from 'react'
import ReactDOM from 'react-dom'
import AppHeader from "./app-header";
import SearchPan from "./srch-panel";
import TodoList from "./todo-list";

const App = () => {
    return <div>
        <AppHeader/>
        <SearchPan/>
        <TodoList/>
    </div>
}

ReactDOM.render(<App />, document.getElementById("root"));