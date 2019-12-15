import React from 'react';



class TodoListTask extends React.Component {
    render = () => {
        return (
           
            <div className="todoList-task">
                <input type="checkbox" checked={this.props.isDone}/>
        <span>{this.props.title}</span>
        &nbsp;
        <span>{this.props.ispriority}</span>
            </div>
          
       
        );
    }
 }
 export default TodoListTask;