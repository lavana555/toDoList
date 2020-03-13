import { createStore } from "redux";
import reducer from "./reducer"
const store = createStore(reducer);
export default store;


// const reducer = (state = intialState, action) => {
//     //debugger;
//     switch (action.type) {
//         case "DELETE-TODOLIST":
//             return {
//                 ...state,
//                 todolists: action.newtodo
//             }
//         case "ADD-TODOLIST":
//             return {
//                 ...state,
//                 todolists: [...state.todolists, action.newToDolist]
//             }
//             case "ADD-TASK":
//             return {
//                 ...state,
//                 todolists:state.todolists.map(tl=>{
//                     if (tl.id===action.todolistId) {
//                         return {...tl,tasks:[...tl.tasks,action.newTask]}
//                     }else {
//                         return tl
//                     }
//                 })
//
//             }
//         case "DELETE-TASK":
//             return {
//                 ...state,
//                 todolists:state.todolists.map(tl=>{
//                     if (tl.id===action.todolistId) {
//                         return {...tl,tasks:[...tl.tasks,action.newtodo]}
//                     }else {
//                         return tl
//                     }
//                 })
//
//             }
//
//             case "CHANGE-TASK":
//                 return {
//                     ...state,
//                     todolists:state.todolists.map(tl=>{
//                         if (tl.id===action.todolistId) {
//                             return {...tl,tasks:action.newT}
//                         }else {
//                             return tl
//                         }
//                     })
//
//                 }
//         default: return state
//     }
//
//
// }

