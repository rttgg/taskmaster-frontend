import React, {useState, useEffect} from 'react';
import logo from './logo.svg';

import './app.scss';

const API = 'http://demodev.us-west-2.elasticbeanstalk.com/taskmaster/tasks'

function App() {

    const [tasks, setTasks] = useState([]);

    function _getTasks() {
        fetch((API))
            .then( data => data.json() )
            .then( fetchedTasks => setTasks(fetchedTasks) );
    }

    function _deleteTask(id) {
        fetch()
            .method()
            .then()
    }
    useEffect( _getTasks, []);

  return (
    <div className="App">
        <ul>
            {tasks.map( (task,idx) => {
                return (
                    <li key={task.id}>
                        <details>
                            <summary>
                                <span onClick={_deleteTask}>{task.title}</span>
                            </summary>
                            <History history={task.history} />
                        </details>
                    </li>
                )
            })}
        </ul>
    </div>
  );
}

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


export default App;
