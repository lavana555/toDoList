import { createStore } from "redux";


const intialState = {
    "todolists": [
        { "id": 1, title: 'onetodolist',nextTaskId:2,
         tasks: [{id: 0, title: "JS", isDone: true, ispriority: "priority:high"},
         {id: 1, title: "JSssss", isDone: false, ispriority: "priority:high"} ] },
        { "id": 2, title: 'twotodolist',tasks: [{id: 0, title: "JS", isDone: true, ispriority: "priority:high"},
        {id: 1, title: "JSssss", isDone: true, ispriority: "priority:high"}] },
        { "id": 3, title: 'tretodolist',tasks: [{id: 0, title: "JS", isDone: true, ispriority: "priority:high"},
        {id: 1, title: "JSssss", isDone: true, ispriority: "priority:high"}] }

    ]
}

const reducer = (state = intialState, action) => {
    //debugger;
    switch (action.type) {
        case "DELETE-TODOLIST":
            return {
                ...state,
                todolists: action.newtodo
            }
        case "ADD-TODOLIST":
            return {
                ...state,
                todolists: [...state.todolists, action.newToDolist]
            }
            case "ADD-TASK":
            return {
                ...state,
                todolists:state.todolists.map(tl=>{
                    if (tl.id===action.todolistId) {
                        return {...tl,tasks:[...tl.tasks,action.newTask]}
                    }else {
                        return tl
                    }
                })

            }
        case "DELETE-TASK":
            return {
                ...state,
                todolists:state.todolists.map(tl=>{
                    if (tl.id===action.todolistId) {
                        return {...tl,tasks:[...tl.tasks,action.newtodo]}
                    }else {
                        return tl
                    }
                })

            }

            case "CHANGE-TASK":
                return {
                    ...state,
                    todolists:state.todolists.map(tl=>{
                        if (tl.id===action.todolistId) {
                            return {...tl,tasks:action.newT}
                        }else {
                            return tl
                        }
                    })
                    
                }
        default: return state
    }


}

const store = createStore(reducer);


export default store;