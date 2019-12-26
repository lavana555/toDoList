import React from 'react';



class TodoListTask extends React.Component {

onChangeclick=(e)=>{

    
//  alert(e.currentTarget.checked)
this.props.changeStetus(e.currentTarget.checked,this.props.task)
}


    render = () => {
        return (
           
            <div className="todoList-task">
                <input type="checkbox"  checked={this.props.task.isDone}   onChange={this.onChangeclick}/>
        <span>{this.props.task.title}</span>
        &nbsp;
        <span>{this.props.task.ispriority}</span>
            </div>
          
       
        );
    }
 }
 export default TodoListTask;