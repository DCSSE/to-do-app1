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

            this.createTodoItem('Drink tea'),
            this.createTodoItem('Implement changes in app'),
            this.createTodoItem('Make notes')
            // {label: 'Drink tea', important: false, id:1},
            // {label: 'Implement changes in app', important: true, id:2},
            // {label: 'Make notes', important: false, id:3},
            // {label: 'Buy groceries', important: false, id:4},

        ],
        term: ''
    };

    createTodoItem(label) {
        return {
            label, important: false,
            done: false, id: this.maxId++
        }
    }

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

        const newItem = this.createTodoItem(text);


        this.setState( ({DataB}) => {
            const newArr = [...DataB, newItem];
            return {
                DataB: newArr};
        } );
    };

     toggleProperty(arr, id, propName) {
         const idDel = arr.findIndex( (elm) => elm.id === id );

         const oldItem = arr[idDel];
         const newItem = {...oldItem, [propName]: !oldItem[propName] };

         return [
             ...arr.slice(0, idDel),
             newItem,
             ...arr.slice(idDel+1)
         ];

     }

     onToggleDone = (id) => {
         this.setState( ({DataB}) => {
             return  {
                 DataB: this.toggleProperty(DataB, id, 'done')
             };
         } );
     };

    onToggleImp = (id) => {
        this.setState( ({DataB}) => {
            return  {
                DataB: this.toggleProperty(DataB, id, 'important')
            };
        } );
    };

    onSearchChg = (term) => {
        this.setState( {term});
    };

    search(items, term) {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    }

    render() {

        const {DataB, term} = this.state;
        const visibleItems = this.search(DataB, term);
        const doneCnt = DataB.filter( (elm) => elm.done ).length;
        const tdCnt = DataB.length - doneCnt;

        return (

            <div className="todo-app">
                <AppHeader toDo={tdCnt} done={doneCnt} />

                <div className="top-panel d-flex">
                     <SrchPanel onSearchChange = {this.onSearchChg} />
                    <ItemStatusFilter />
                </div>

                <TodoList thtodo={visibleItems}
                          onDeleted = { this.deleteItem}
                          onToggleImp = {this.onToggleImp}
                          onToggleDone = {this.onToggleDone}
                />

                <ItemAddForm onItemAdded = {this.addItem}/>

            </div>
        );
    }

}