import React from 'react';
import ButtonFooter from './ButtonFooter';

class TodoListFooter extends React.Component {
    state = {

        isHidden: true
    }
    onAllFilterClick = () => {
        this.props.newFilterColor("All")
    }
    onCompletedFilterClick = () => {
        this.props.newFilterColor("Completed")
    }
    onActiveFilterClick = () => {
        this.props.newFilterColor("Active")
    }

     onKorzinaFilterClick=()=>{
        this.props.newFilterColor("korzina")
     }


    onShowFiltersClick = () => {
        this.setState({ isHidden: false })
    }
    onHideFiltersClick = () => {
        this.setState({ isHidden: true })
    }



    render = () => {
        return (
            <div className="todoList-footer">
                <ButtonFooter onAllFilterClick={this.onAllFilterClick}
                    onCompletedFilterClick={this.onCompletedFilterClick}
                    onActiveFilterClick={this.onActiveFilterClick}
                    onShowFiltersClick={this.onShowFiltersClick}
                    onHideFiltersClick={this.onHideFiltersClick}
                    onKorzinaFilterClick={this.onKorzinaFilterClick}
                    state={this.state}
                    filtetValue={this.props.filtetValue}
                />
            </div>
        );
    }
}
export default TodoListFooter;
 /////////////// сделать вместо кнопок компоненту батон
