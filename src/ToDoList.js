import React from 'react';
import './App.css';
//import TodoListHeader from './AddNewItemForm.js/index.js';
import TodoListTasks from './TodoListTasks.js';
import TodoListFooter from './TodoListFooter.js';
import TodoListTitle from './TodoListTitle';
import AddNewItemForm from './AddNewItemForm';
import { connect } from "react-redux";




class ToDoList extends React.Component {


    componentDidMount() {
        this.restoreState();

    }
    saveState = () => {

        //переводим объект в строку
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem("our-state" + this.props.id, stateAsString)

    }
    restoreState = () => {
        // объявляем наш стейт стартовый
        let state = {
            task: [],
            filtetValue: 'All',


        }
        // считываем сохраненную ранее строку с localstorage
        let stateAsString = localStorage.getItem("our-state" + this.props.id);
        if (stateAsString != null) {
            state = JSON.parse(stateAsString);
        }
        this.setState(state)
    }


    nextTaskId = 2;

    state = {
        nextTaskId: 4,

        tasks: [
            { id: 0, title: "JS", isDone: true, ispriority: 'priority:high' },
            { id: 1, title: "HTML", isDone: true, ispriority: 'priority:high' },
            { id: 2, title: "CSS", isDone: true, ispriority: 'priority:low' },
            { id: 3, title: "REACT", isDone: false, ispriority: 'priority:low' }
        ],
        filtetValue: "All",
    }
    newFilterColor = (NewfilterValue) => {
        this.setState({
            filtetValue: NewfilterValue
        })
    };
    changeStetus = (isDone, taskId) => {
        this.changeTask({ isDone: isDone }, taskId)
    }



    deleteTask = (title) => {

        let newtask = this.props.tasks.filter(task=>task.title !=title)
        let todolistId = this.props.id
        this.props.onDeleteTask(newtask,todolistId)

    }

    korzinaTask = () => {

        let netasks = this.state.tasks.filter((task) => { return task.isDone === true })


        this.setState({
            tasks: netasks
        })

    }

    titleChanged = (title, taskId) => {

        this.changeTask({ title: title }, taskId)
    }



    AddItemCLick = (newText) => {
        let newTask = {
            id: this.nextTaskId,
            title: newText,
            isDone: true,
            ispriority: 'priority:high'
        };

        let todolistId = this.props.id
        this.nextTaskId++
        this.props.onAddItemCLick(newTask, todolistId)

    }

    changeTask = (obj,taskId) => {

        let newT = this.props.tasks.map(t => {
             if (t.id === taskId) {
                 return { ...t, ...obj }
             } else {
                 return t
             }
         }
         )
        let todolistId=this.props.id
        this.props.onChangeTask(newT, todolistId)
    }

    TaskFilterValue = () => {

    }

    render = () => {

        return (
            <div className="App">
                <div className="todoList">

                    <TodoListTitle title={this.props.title} deleleteToDoList={this.props.deleleteToDoList}/>
                    <AddNewItemForm AddItemCLick={this.AddItemCLick} />
                    <TodoListTasks changeStetus={this.changeStetus} deletetask={this.deleteTask} tasks={this.props.tasks}
                        titleChanged={this.titleChanged}
                        tasks={this.props.tasks.filter((t) => {
                            if (this.state.filtetValue === "All") {
                                return true;
                            } else if (this.state.filtetValue === "Completed") {
                                return t.isDone === true;
                            } else if (this.state.filtetValue === "Active") {
                                return t.isDone === false;
                            } else if (this.state.filtetValue === "korzina") {
                                return alert('yo');
                            }

                            return false
                        }
                        )} />
                    <TodoListFooter newFilterColor={this.newFilterColor}
                        //  korzinaTask={this.korzinaTask} 
                        chekedFilter={this.chekedFilter}
                        filtetValue={this.state.filtetValue}
                    />
                </div>
            </div>
        );
    }
}


const MapDispatchToProps = (dispatch) => {

    return {
        onAddItemCLick: (newTask, todolistId) => {
            const action = {
                type: "ADD-TASK",
                newTask,
                todolistId,

            }
            dispatch(action)
        },

        onChangeTask: (newT,todolistId) => {
            const action = {
                type: "CHANGE-TASK",
                newT, 
                todolistId
            }
            dispatch(action)
        },
        onDeleteTask: (newtask,todolistId) => {
            const action = {
                type: "DELETE-TASK",
                newtask,
                todolistId
            }
            dispatch(action)
        }
    }
};


const ConnecToDoList = connect(null, MapDispatchToProps)(ToDoList);
export default ConnecToDoList;




