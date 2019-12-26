import React from 'react';

class TodoListFooter extends React.Component {




    render = () => {
        // // function buttonClick () {
        // // var   classForAll='filter-active';
        // onclick={this.props.filtetValue='filter-active'
        

    //    function buttonClick() {
    //     let classForAll=" ";
    //     let classForCompleted=' ';

    //          if (this.props.filtetValue==="All") 
    //          {let classForAll="filter-active"
    //          } else if (this.props.filtetValue==="Completed") {
    //          let classForCompleted="filter-active" 
    //         }else if (this.props.filtetValue==="Active" )
    //       { let classForCompleted="filter-active"   
    //      }
    //     }

          let classForAll=this.props.filtetValue==="All"? "filter-active":"";
          let classForCompleted=this.props.filtetValue==="Completed"? "filter-active":"";
           let classForActive=this.props.filtetValue==="Active"? "filter-active":"";
        
         
                        return (
                           
            <div className="todoList-footer">
            {/* <button onClick={()=>{this.props.newFilterColor("All")}} onClick={()=>this.props.chekedFilter(' ')} className={classForAll}>All</button>
            <button onClick={()=>{this.props.newFilterColor("Completed")}} onClick={()=>this.props.chekedFilter('true')} className={classForCompleted}>Completed</button>
            <button  onClick={()=>{this.props.newFilterColor("Active")}} onClick={()=>this.props.chekedFilter('false')} className={classForActive}>Active</button>
         */}
        
        
            <button onClick={()=>{this.props.newFilterColor("All")}}   className={classForAll}>All</button>
            <button onClick={()=>{this.props.newFilterColor("Completed")}}  className={classForCompleted}>Completed</button>
            <button  onClick={()=>{this.props.newFilterColor("Active")}}   className={classForActive}>Active</button>
        
        
        
        
        </div>
        );
    }
 }
 export default TodoListFooter;
 