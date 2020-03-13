import React from 'react';
import './App.css';
import ToDoList from './ToDoList';
import AddNewItemForm from './AddNewItemForm';
import { connect } from "react-redux";
import store from './store';
import {ADD_TODOLIST, addToDOlistAC, DELETE_TODOLIST, ondeleleteToDoListAC} from "./reducer";

class App extends React.Component {
    // componentDidMount() {
    //     this.restoreState();
    // }

    // saveState = () => {
    //     //переводим объект в строку
    //     let stateAsString = JSON.stringify(this.state);
    //     localStorage.setItem("our-todolist", stateAsString)
    // }
    // restoreState = () => {
    //     // объявляем наш стейт стартовый
    //     let state = {
    //         nextTaskId: 5,
    //         todolist: [
    //             { id: 1, title: 'onetodolist' },
    //             { id: 2, title: 'twotodolist' },
    //             { id: 3, title: 'tretodolist' }
    //         ]
    //     }
    //     let stateAsString = localStorage.getItem("our-todolist");
    //     if (stateAsString != null) {
    //         state = JSON.parse(stateAsString);
    //     }
    //     this.setState(state)
    // }
    state = {
        nextTaskId: 5,
        todolists: [
            // { id: 1, title: 'onetodolist' },
            // { id: 2, title: 'twotodolist' },
            // { id: 3, title: 'tretodolist' },
            // { id: 4, title: 'fourtodolist' }
        ]
    }

    deleleteToDoList = (title) => {

      let newtodo = this.props.todolists.filter(todolist=>todolist.title !=title)
        this.props.ondeleleteToDoList(newtodo)
    }

    addToDoList = (title) => {
        let newToDolist = {
            id: this.nextTaskId,
            title: title,
            tasks:[]
        }
        this.props.addToDoList(newToDolist)
        this.nextTaskId++
    }
    render = () => {

        const todolists = this.props.todolists.map(tl => <ToDoList id={tl.id} title={tl.title} tasks={tl.tasks} nextTaskId={tl.nextTaskId} deleleteToDoList={this.deleleteToDoList}/>)
        return (
            <>
                <AddNewItemForm AddItemCLick={this.addToDoList} />
                <div className="App">

                    {todolists}

                </div>
            </>
        );
    }
}


const MapStateToProps = (state) => {
    return {
        todolists: state.todolists
    }
};
const MapDispatchToProps = (dispatch) => {
//debugger;
    return {
        addToDoList: (newToDolist) => {
            // const action = {
            //     type: ADD_TODOLIST,
            //     newToDolist: newToDolist
            // }
            const action= addToDOlistAC(newToDolist)
            dispatch(action)
        },
        ondeleleteToDoList: (newtodo) => {
            // const action = {
            //     type: DELETE_TODOLIST,
            //     newtodo : newtodo
            // }
            const action=ondeleleteToDoListAC(newtodo)
            dispatch(action)
           // dispatch(ondeleleteToDoListAC(newtodo))
            //ondeleteToDoList:(newtodo)=>dispatch(ondeleleteToDoListAC(newtodo))
        }
    }
};


const ConnectApp = connect(MapStateToProps,MapDispatchToProps)(App);
export default ConnectApp;



