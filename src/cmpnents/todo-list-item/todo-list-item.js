import React, {Component} from 'react'
import './todo-list-item.css';

export default class TodoListItem extends Component {

    render() {
        const { label, onDeleted,
            onToggleImp,
            onToggleDone,
            important, done} = this.props;

        let classNames = 'todo-list-item';

        if (important) {
            classNames += ' important'
            console.log(classNames);
        }

        if(done) {
            classNames += ' done';
            console.log(classNames);
        }


        return(
            <span className={classNames } >
                <span
                    className="todo-list-item-label"
                    onClick={onToggleDone}>
                    {label}
                </span>

                <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                        onClick = {onToggleImp}>
                    <i className="fa fa-exclamation" />
                </button>

                <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={onDeleted}>
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        );
    };
}

