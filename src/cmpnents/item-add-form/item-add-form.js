import React, { Component } from "react";
import './item-add-form.css';

export default class ItemAddForm extends  Component {

    state = {
        label: ''
    };

    onLabelChg = (e) => {
      this.setState( {
          label: e.target.value
      });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
    }

    render() {
        return (
            <form className={ "item-add-form d-flex" }
                onSubmit={this.onSubmit}>

                <input type={'text'} className={"form-control"}
                    onChange={this.onLabelChg}
                    placeholder={"What else to do"}/>

                <button className={ "btn btn-outline-secondary" } >
                    Add Item
                </button>
            </form>
        )
    }
}