import React, {useState, useEffect} from 'react';
import Task from './Task';


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
        <h1>Tasks</h1>
        <Task tasks={tasks} api={API}/>

    </div>
  );

}



export default App;
