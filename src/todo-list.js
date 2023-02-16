import React from 'react'
import TodoListItem from "./todo-list-item";

const TodoList = () => {

    return (
        <ul>
            <li> <TodoListItem label= "Drink tea" /> </li>
            <li> <TodoListItem label= "Implement changes in app"/>  </li>
            <li> <TodoListItem label= "Make notes"/>  </li>
            <li> <TodoListItem label= "Don't be lazy" important />  </li>
        </ul>
    )
}

export default TodoList


