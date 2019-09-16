import React from 'react';
import History from './History';
import Form from './Form';

import './App';

function Task(props) {
    return(
        <div>
            {props.tasks.map((t, id) => {
                return(
                    <li key={t.id}>
                        <details>
                            <summary>
                                <span>Task:{t.title}</span>
                                <Form task={t} api={props.api}/>
                            </summary>
                            <p>Description: {t.description}</p>
                            <p>Assigned to: {t.assignee}</p>
                            <History history={t.history} />
                        </details>
                    </li>
                )
            })}
        </div>
    )

}

export default Task;