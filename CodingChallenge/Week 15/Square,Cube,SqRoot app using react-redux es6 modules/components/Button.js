import React from "react";
import {connect} from "react-redux";
import {mapper} from "../store.js";

class ButtonComponent extends React.Component {
    render() {
        return(
            <React.Fragment>
            <button onClick = {this.handleSquare}>Square</button>
            <button onClick = {this.handleCube}>Cube</button>
            <button onClick = {this.handleSquareRoot}>SquareRoot</button>
            </React.Fragment>
        );
    }

    handleSquare = () => {
        this.props.dispatch({
            type:"SQUARE"
        })
    }

    handleCube = () => {
        this.props.dispatch({
            type:"CUBE"
        })
    }

    handleSquareRoot = () => {
        this.props.dispatch({
            type:"ROOT"
        })
    }
}

let Button = connect(mapper)(ButtonComponent);

export{Button};