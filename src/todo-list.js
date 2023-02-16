import React from 'react'
import TodoListItem from "./todo-list-item";

const TodoList = ({thtodo}) => {

    const elms = thtodo.map( (item) =>  {
        return (
            <li>
                <TodoListItem {...item} />
            </li>
        );
    });

    return (
        <ul>
            {elms}
        </ul>
    )
}

export default TodoList


