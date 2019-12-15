import React from 'react';
import './App.css';
import TodoListHeader from './TodoListHeader.js';
import TodoListTasks from './TodoListTasks.js';
import TodoListFooter from './TodoListFooter.js';





class App extends React.Component {


    
     tasks= [
        {title:"JS", isDone:true, ispriority:'priority:high'},
        {title:"HTML", isDone:true, ispriority:'priority:high'},
        {title:"CSS", isDone:true, ispriority:'priority:low'},
        {title:"REACT", isDone:false, ispriority:'priority:low'}
        ];

        filtetValue="All";

    render = () => {
     
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader />
                    <TodoListTasks tasks={this.tasks} />
                    <TodoListFooter filtetValue={this.filtetValue} />
                </div>
            </div>
        );
    }
}

export default App;

