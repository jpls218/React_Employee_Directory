import React, { Component } from 'react'

export default class SearchBox extends Component {
    render() {
        return (
            <div>  
                <form className="form" id="addItemForm">
                    <input
                    type="text"
                    className="input"
                    id="addInput"
                    placeholder="Search for employee"
                    />
                    <button className="button is-info" onClick={this.addItem}>
                    Search
                    </button>
                </form>
            </div>
        )   
    }
}