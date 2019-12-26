import React from 'react';
import './App.css';
import TodoListHeader from './TodoListHeader.js';
import TodoListTasks from './TodoListTasks.js';
import TodoListFooter from './TodoListFooter.js';





class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.newTaskTitleRef=React.createRef();
     

    // }
    state = {
        
        tasks: [
            { title: "JS", isDone: true, ispriority: 'priority:high' },
            { title: "HTML", isDone: true, ispriority: 'priority:high' },
            { title: "CSS", isDone: true, ispriority: 'priority:low' },
            { title: "REACT", isDone: false, ispriority: 'priority:low' }
        ],

        filtetValue: "All",


}

newFilterColor =(NewfilterValue)=>{
    this.setState({
        filtetValue:NewfilterValue
    })
        
    };


    // chekedFilter=(checked)=>{
    //     let newt=[...this.state.tasks]
    //     let tasksNewss=[...this.state.tasks];
    //     let tasksNewsss=[...this.state.tasks];
    //     let tasksNews=tasksNewss.filter((task)=>task.isDone===true);
    //     let tasksNew=tasksNewsss.filter((task)=>task.isDone===false);
        
    //     if (checked===' ') {
    //         this.setState({
    //             tasks:newt
    //         });
    //     }else if (checked==="true") {
    //             this.setState({
    //                    tasks:tasksNews
    //             })

    //     }else if (checked==="false") {
    //         this.setState({
    //             tasks:tasksNew
    //         })

    //     }
    // }

changeStetus=(isDone,task)=>{
    let newT=this.state.tasks.map(t=>{
        if(t==task) {
            return{...t,isDone:isDone}
        }else {
            return t
        }
    })

    this.setState({
                     tasks:newT
                 })

}



    AddTaskCLick = (newText) => {
        // let newText=this.newTaskTitleRef.current.value;
        let newTask = {
            title: newText,
            isDone: true,
            ispriority: 'priority:high'
        };
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        });
        // this.newTaskTitleRef.current.value=' ';
    }

TaskFilterValue=()=> {
    


}



render = () => {

    return (
        <div className="App">
            <div className="todoList">
                 <TodoListHeader AddTaskCLick={this.AddTaskCLick} /> 
                 {/* <div className="todoList-header">
                    <h3 className="todoList-header__title">What to Learn</h3>
                    <div className="todoList-newTaskForm">
                        <input ref={this.newTaskTitleRef} type="text" placeholder="New task name" />
                        <button onClick={this.onAddTaskCLick}>Add</button>
                    </div> 
                </div> */}
                <TodoListTasks changeStetus={this.changeStetus}    tasks={this.state.tasks.filter((t)=>{
                    if(this.state.filtetValue==="All" ){
                        return true;
                    }else if (this.state.filtetValue==="Completed") {
                        return t.isDone===true;
                    }else if(this.state.filtetValue==="Active") {
                        return t.isDone===false;
                    }
                    
                    return false}   
                                    
                    
                    
                    )}/>

                 <TodoListFooter newFilterColor={this.newFilterColor} chekedFilter={this.chekedFilter}  filtetValue={this.state.filtetValue}
                     
                
                    
                
                
                />
            </div>
        </div>
    );
}
}

export default App;

