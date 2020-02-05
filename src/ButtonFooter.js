import React from 'react';

class ButtonFooter extends React.Component {
    render = () => {
        let classForAll = this.props.filtetValue === "All" ? "filter-active" : "";
        let classForCompleted = this.props.filtetValue === "Completed" ? "filter-active" : "";
        let classForActive = this.props.filtetValue === "Active" ? "filter-active" : "";
        return (
            <div >
                {!this.props.state.isHidden && <div>
                    <button onClick={this.props.onAllFilterClick} className={classForAll}>All</button>
                    <button onClick={this.props.onCompletedFilterClick} className={classForCompleted}>Completed</button>
                    <button onClick={this.props.onActiveFilterClick} className={classForActive}>Active</button>
                    <button onClick={this.props.onKorzinaFilterClick} >Корзина</button>
                </div>
                }
                {!this.props.state.isHidden && <span onClick={this.props.onHideFiltersClick}> hide</span>}
                {this.props.state.isHidden && <span onClick={this.props.onShowFiltersClick}> show</span>}
            </div>
        );
    }
}
export default ButtonFooter;
 /////////////// сделать вместо кнопок компоненту батон
