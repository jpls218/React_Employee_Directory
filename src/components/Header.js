import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div class="jumbotron">
                <h1>Employee Directory</h1>
                <p>Click on carrots to filter by heading or use the search box to narrow your results</p>
            </div>
        )   
    }
}