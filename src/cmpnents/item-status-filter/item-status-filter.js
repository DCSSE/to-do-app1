import React, {Component} from 'react'
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

    buttons = [
        {name: 'all', label: 'All tasks'},
        {name: 'active', label: 'Active tasks'},
        {name: 'done', label: 'Completed tasks'}
    ];

    render() {

        const { filter, onFilterChange } = this.props;

        const buttons = this.buttons.map( ({name, label}) => {
            const isAct = filter === name;
            const clazz = isAct ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button type = "button"
                        className={`btn ${clazz}`}
                        key = {name}
                        onClick={ () => onFilterChange(name) } >
                    {label}
                </button>
            );
        });

        return (
            <div className={"btn-group"}>

                {buttons}

            </div>
        );
    }
}