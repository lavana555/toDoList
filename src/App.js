import React from 'react';
import './App.css';
import ToDoList from './ToDoList';
import AddNewItemForm from './AddNewItemForm';



class App extends React.Component {

    componentDidMount() {
        this.restoreState();

    }

    saveState = () => {

        //переводим объект в строку
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem("our-todolist", stateAsString)

    }

    restoreState = () => {
        // объявляем наш стейт стартовый
        let state = {
            nextTaskId: 5,
    todolist:[
        {id:1,title:'onetodolist'},
        {id:2,title:'twotodolist'},
        {id:3,title:'tretodolist'}
       
    ]
           
       

        }
        let stateAsString = localStorage.getItem("our-todolist");
        if (stateAsString != null) {
            state = JSON.parse(stateAsString);
        }
        this.setState(state)
    }

state={
    nextTaskId: 5,
    todolist:[
        {id:1,title:'onetodolist'},
        {id:2,title:'twotodolist'},
        {id:3,title:'tretodolist'},
        {id:4,title:'tretodolist'}
    ]
    
    // newTitle:"new title"
}


// AddItemCLick = (newText) => {
//     let newTask = {
//         id: this.state.nextTaskId,
// //         title: newText,
// //         isDone: true,
// //         ispriority: 'priority:high'
// //     };
// //     this.state.nextTaskId++;
// //     let newTasks = [...this.state.tasks, newTask];
// //     this.setState({
// //         tasks: newTasks
// //     }, () => { this.saveState() });

// // }

        addToDoList=(title)=>{
            let newToDolist = {
                        id: this.state.nextTaskId,
                      title: title,
                          }
            this.state.nextTaskId++;
            let newToDolistS=[...this.state.todolist,newToDolist];
            this.setState({
                todolist:newToDolistS
            },() => { this.saveState() })
        }



    render = () => {
        const todolist=this.state.todolist.map(tl=><ToDoList id={tl.id} title={tl.title}/>)

        return (
            <>
            {/* <div>
                <input  
                 value="sdfsdfddfgfdgfd"
                      />
                <button onClick={this.addTodolist}>Add</button>
                </div> */}

                <AddNewItemForm AddItemCLick={this.addToDoList} />
            <div className="App">
                {todolist}
         
         </div>
         </>
        );
    }
}

export default App;

