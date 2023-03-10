import React from 'react'
import TodoListItem from "../todo-list-item/todo-list-item";
import './todo-list.css';

const TodoList = ({thtodo, onDeleted,
                      onToggleImp,
                      onToggleDone}) => {

    const elms = thtodo.map( (item) =>  {
        const {id, ...itemProps} = item;
        return (
            <li key = {id} className={"list-group-item"}>
                <TodoListItem {...itemProps}
                    onDeleted = {() => onDeleted(id)}
                    onToggleImp = {() => onToggleImp(id)}
                    onToggleDone = {() => onToggleDone(id)} />
            </li>
        );
    });

    return (
        <ul className={"list-group todo-list"}>
            {elms}
        </ul>
    )
}

export default TodoList


