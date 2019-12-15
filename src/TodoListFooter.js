import React from 'react';

class TodoListFooter extends React.Component {




    render = () => {

        let classForAll=this.props.filtetValue==="All"? "filter-active":"";
        let classForCompleted=this.props.filtetValue==="Completed"? "filter-active":"";
        let classForActive=this.props.filtetValue==="Active"? "filter-active":"";

        return (
            <div className="todoList-footer">
            <button className={classForAll}>All</button>
            <button className={classForCompleted}>Completed</button>
            <button className={classForActive}>Active</button>
        </div>
        );
    }
 }
 export default TodoListFooter;
 