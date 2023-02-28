import React, {Component} from "react";

import AppHeader from "../app-header";
import TodoList from "../todo-list/todo-list";
import ItemStatusFilter from "../item-status-filter";
import './app.css'
import SrchPanel from "../search-pan/srch-panel";
import ItemAddForm from "../item-add-form";

export default class App extends Component {

    maxId = 200;
    state = {
        DataB: [
            {label: 'Drink tea', important: false, id:1},
            {label: 'Implement changes in app', important: true, id:2},
            {label: 'Make notes', important: false, id:3},
            {label: 'Buy groceries', important: false, id:4},

        ]
    };

    deleteItem = (id) => {
        this.setState( ({DataB}) => {
            const idDel = DataB.findIndex( (elm) =>  elm.id === id );

            // [a, b c, d, e]
            // [a, b,   d, e]
            const newArr = [
                ...DataB.slice(0, idDel),
                ...DataB.slice(idDel +1)
            ];

            return {
                DataB: newArr
            };
        } );
    };

    addItem = (text) => {
        const newItem = {
            label: text, important: false, id: this.maxId++
        };
        this.setState( ({DataB}) => {
            const newArr = [...DataB, newItem];
            return {
                DataB: newArr};
        } );
    };

     onToggleImp = (id) => {
         console.log('Toggle Imp: ', id );
     };

     onToggleDone = (id) => {
         console.log('Toggle done: ', id);
     };

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />

                <div className="top-panel d-flex">
                     <SrchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList thtodo={this.state.DataB}
                          onDeleted = { this.deleteItem}
                          onToggleImp = {this.onToggleImp}
                          onToggleDone = {this.onToggleDone}
                />

                <ItemAddForm onItemAdded = {this.addItem}/>

            </div>
        );
    }

}