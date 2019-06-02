import React from 'react';
import {connect} from 'react-redux';
import {store, storeMapper} from './store.js';



class SingleTodoComponent extends React.Component {

    handleDoubleClick = () => {
        this.props.dispatch({
            type:"DELETE_TODO",
            todo:this.props.t
        })
    }
    
    render() {
        return(
           <li onDoubleClick={this.handleDoubleClick} className="list-group-item">{this.props.t}</li>
        );
    }
}

let SingleTodo = connect(storeMapper)(SingleTodoComponent);

export{SingleTodo};