import React, {Component} from "react";

import AppHeader from "../app-header";
import TodoList from "../todo-list/todo-list";
import ItemStatusFilter from "../item-status-filter";
import './app.css'
import SrchPanel from "../search-pan/srch-panel";

export default class App extends Component {

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
            console.log(idDel);
            DataB.splice(id, 1);
            // [a, b c, d, e]
            // [a, b,   d, e]
            const before = DataB.slice(0, idDel);
            const after = DataB.slice(idDel+1);
            const newArr = [...before, ...after];

            return {
                DataB: newArr
            };
        } );
    };

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />

                <div className="top-panel d-flex">
                     <SrchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList thtodo={this.state.DataB} onDeleted = { this.deleteItem} />

            </div>
        );
    }



        // <div className="todo-app">
        //     <AppHeader toDo={1} done={3} />
        //     <div className="top-panel d-flex">
        //         <SrchPanel />
        //         <ItemStatusFilter />
        //     </div>
        //
        //     <TodoList thtodo={DataB} onDeleted = {(id) => console.log('del', id) } />
        // </div>

}