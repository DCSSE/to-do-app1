import React, {Component} from 'react'
import "./srch-pan.css"

export default class SearchPan extends Component {

    state = {
        term: ''
    };

    onSearchChg = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    };

    render() {
        return (
            <input type = "text"
                   className = {"form-control search-input"}
                   placeholder={"Type to search"}
                   value={this.state.term}
                    onChange={this.onSearchChg}/>
        );
    }

}