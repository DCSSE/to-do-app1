import React from 'react'
import ReactDOM from 'react-dom'

const TodoList = () => {
    const things = ['Install React Proj', 'React start npm', 'Do homework', 'Drink tea', 'Watch kdrama'];
    return (
        <ul>
            <li> {things[0]} </li>
            <li> {things[1]} </li>
            <li> {things[2]} </li>
            <li> {things[3]} </li>
            <li> {things[4]} </li>

        </ul>
    )
}

const AppHeader = () => {
    return <h1>My To-do list</h1>
}

const SearchPan = () => {
    const srchText = 'Type text';
    const srchStyle = {
        fontSize: "20px"
    };
    return <input style={srchStyle}
        placeholder={srchText}
                  disabled={true}
    />
}

const App = () => {
    return <div>
        <AppHeader/>
        <SearchPan/>
        <TodoList/>
    </div>
}

ReactDOM.render(<App />, document.getElementById("root"));