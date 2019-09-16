import React from 'react';
import './App.css';


function History(props) {
    return (
        <ol>
            {props.history.map( (record,idx) => {
                return (
                    <li key={idx}>
                        <span>{record.timestamp}</span>
                        <span>{record.action}</span>
                    </li>
                )
            })}
        </ol>
    )
}

export default History;