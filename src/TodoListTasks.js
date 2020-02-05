import React from 'react';
import TodoListTask from './ToDoListTask';
//import TodoListFooter from './TodoListFooter.js';




class TodoListTasks extends React.Component {
    render = () => {
        let taskElements=this.props.tasks.map(task =><TodoListTask task={task}  changeStetus={this.props.changeStetus} deletetask={this.props.deletetask}  titleChanged={this.props.titleChanged} />);
         

        return (
            <div className="todoList-tasks" >
                
           {taskElements}
                    

        </div>
        );
    }
 }
 export default TodoListTasks;

















/*

class TodoListTasks extends React.Component {
    render = () => {
        return (
            <div className="todoList-tasks">
            <div className="todoList-task">
                <input type="checkbox" checked={true}/>
                <span>CSS</span>
            </div>
            <div className="todoList-task">
                <input type="checkbox" checked={false}/>
                <span>JS</span>
            </div>
            <div className="todoList-task">
                <input type="checkbox" checked={false}/>
                <span>ReactJS</span>
            </div>
            <div className="todoList-task">
                <input type="checkbox" checked={true}/>
                <span>Patterns</span>
            </div>
        </div>
        );
    }
 }
 export default TodoListTasks;


 */