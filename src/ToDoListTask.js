import React from 'react';



class TodoListTask extends React.Component {

    state = {
        editMode: false

    }

    onChangeclick = (e) => {

        this.props.changeStetus(e.currentTarget.checked, this.props.task.id)
    }

    activeEditMode = () => {
        this.setState({ editMode: true })

    }

    deactivatedEditMode = () => {
        this.setState({ editMode: false })
    }

    onTitleChanged = (e) => {

        this.props.titleChanged(e.currentTarget.value, this.props.task.id)
    }

    delete=()=>{
        this.props.deletetask(this.props.task.title)
    }


    render = () => {
        let taskClass = this.props.task.isDone ? "todoList-task done" : "todoList-task ";
        return (

            <div className={taskClass}>
                <button onClick={this.delete}>X</button>
                <input type="checkbox" checked={this.props.task.isDone}
                 onChange={this.onChangeclick} />

                {this.state.editMode
                    ? <input
                        onBlur={this.deactivatedEditMode}
                        autoFocus={true}
                        value={this.props.task.title} onChange={this.onTitleChanged} />
                        : <span onClick={this.activeEditMode} >
                    {this.props.task.id}-{this.props.task.title}</span>
                }, {this.props.task.ispriority}
            </div>

        );
    }
}
export default TodoListTask;