import React from 'react';
import {connect} from 'react-redux';
import {storeMapper} from './store.js';
import {SingleTodo} from './SingleTodo.js'

class DisplayComponent extends React.Component {
    state = {
        todo:null
    };

    handleChange = e => {
        this.setState({todo:e.target.value})
    }

    handleClick = () => {
        this.props.dispatch({
            type:"ADD_TODO",
            todo:this.state.todo
        })
    }

    resetInput = () => {
        this.setState({todo:""})
    }
    render() {
        return(
            <React.Fragment>
                <h6>DoubleClick On Todo To Delete It</h6>
            <input onChange={this.handleChange} value={this.state.todo} className="form-control" type="text"/>
            <hr/>
            <button onClick={() => {this.handleClick();this.resetInput();}} className="btn btn-info">Add Todo</button>
            <ol className= "list-group m-3">
            {this.props.todos.map( t => {
                return(
                    <SingleTodo t= {t}/>
                );
            })} 
            </ol>
            </React.Fragment>
        );
    }
}

let Display = connect(storeMapper)(DisplayComponent);

export {Display};