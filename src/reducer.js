export const DELETE_TODOLIST="DELETE-TODOLIST";
export const ADD_TODOLIST="ADD-TODOLIST";
export const ADD_TASK="ADD-TASK";
export const DELETE_TASK="DELETE-TASK";
export const CHANGE_TASK="CHANGE-TASK";



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
    debugger;
    switch (action.type) {
        case DELETE_TODOLIST:
            return {
                ...state,
                todolists: action.newtodo
            }
        case ADD_TODOLIST:
            return {
                ...state,
                todolists: [...state.todolists, action.newToDolist]
            }
            case ADD_TASK:
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
        case DELETE_TASK:
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

            case CHANGE_TASK:
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


export const onChangeTaskAC=(newT,todolistId)=>{
    return {type: CHANGE_TASK,newT,todolistId}
};
export const addToDOlistAC=(newToDolist)=>{
    return {type: ADD_TODOLIST, newToDolist: newToDolist}
};
export const ondeleleteToDoListAC=(newtodo)=>{
    return {type: DELETE_TODOLIST,
        newtodo : newtodo}
}
export const onAddItemCLickAC=(newTask, todolistId)=>{
    return { type: ADD_TASK,
        newTask,
        todolistId}
}
export const onDeleteTaskAC=(newtask,todolistId)=>{
    return { type: DELETE_TASK,
        newtask,
        todolistId}
}

export default reducer;