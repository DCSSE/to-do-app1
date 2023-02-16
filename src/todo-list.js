import React from 'react'
import TodoListItem from "./todo-list-item";

const TodoList = ({thtodo}) => {

    const elms = thtodo.map( (item) =>  {
        const {id, ...itemProps} = item;
        return (
            <li key = { item.id }>
                <TodoListItem {...itemProps} />
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


