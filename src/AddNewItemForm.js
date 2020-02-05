import React from 'react';


class AddNewItemForm extends React.Component {
       constructor(props) {
        super(props)
        
    }
    state = {
        classError: false,
        title: ""
    }
    onAddItemClick = (e) => {
                let newText = this.state.title;
              if (newText.trim() === "") {
            this.setState({
                classError: true
            })
        } else {
            this.setState({
                classError: false
            });
            this.props.AddItemCLick(newText);
            
        }
        this.state.title="";
    }
    Resetcolor = (e) => {
        let newTitle=e.currentTarget.value;
        this.setState({
            classError: false,
            title:newTitle
                    });
    }
    keyPress = (e) => {
        if (e.key === "Enter") {
            this.onAddItemClick()

        }
    }

    // deleteTask=()=>{
    //     alert('yo')
    // }



    render = () => {
        let classError = this.state.classError === true ? "error" : "";
        return (
            <div className="todoList-header">
    {/* <h3 className="todoList-header__title">{this.props.title}</h3> */}
                <div className="todoList-newTaskForm">
                    <input className={classError} 
                    onChange={this.Resetcolor}
                     onKeyPress={this.keyPress} 
                     value={this.state.title} 
                    //  placeholder="new item name"
                    //  ref={this.newTaskTitleRef} 
                     type="text" placeholder="New item name" />
                    <button onClick={this.onAddItemClick}>Add</button>
                    <button onClick={this.props.deleteTask}>Delete Task</button>
                </div>
            </div>
        )
    }
}

export default AddNewItemForm;