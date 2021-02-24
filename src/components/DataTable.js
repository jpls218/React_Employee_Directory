import React, { Component } from 'react'
import DataBody from './components/DataBody'

function DataTable({headings, users, handleSort}){
    return (
        <div className="datatable mt-5">
            <table id="table" className="talbe table-striped talbe-hover">
                <thead>
                    <tr>
                        {headings.map(({name, width}) => {
                            return (
                                <th
                                className="col"
                                key={name}
                                style={{width}}
                                onClick = {() => {
                                    handleSort(name.toLowerCase());
                                }}
                                >
                                {name}
                                <span className="pointer"></span>    
                                </th>
                            );
                        })}
                    </tr>
                </thead>
            </table>
        </div>
    )
}