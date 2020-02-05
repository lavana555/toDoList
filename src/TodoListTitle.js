import React from 'react';


class TodoListTitle extends React.Component {
       
delete=()=>{

    this.props.deleleteToDoList(this.props.title)
}

    render = () => {
       
        return (
            <div className="todoList-header">
    <h3 className="todoList-header__title">{this.props.title}</h3>
                <button onClick={this.delete}>X</button>
                <div className="todoList-newTaskForm">
                   
                </div>
            </div>
        )
    }
}

export default TodoListTitle;