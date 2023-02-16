import React from 'react'
import TodoListItem from "./todo-list-item";

const TodoList = ({thtodo}) => {

    return (
        <ul>
            <li> <TodoListItem
                label = {thtodo[0].label}
            important={thtodo[0].important}/> </li>

            <li> <TodoListItem
                label = {thtodo[1].label}
                important={thtodo[1].important}/> </li>

            <li> <TodoListItem
                label = {thtodo[2].label}
                important={thtodo[2].important}/> </li>

            <li> <TodoListItem
                label = {thtodo[3].label}
                important={thtodo[3].important}/> </li>


        </ul>
    )
}

export default TodoList


