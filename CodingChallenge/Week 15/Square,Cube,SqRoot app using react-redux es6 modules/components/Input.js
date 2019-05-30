import React from "react";
import {connect} from "react-redux";
import {mapper} from "../store.js"

class InputComponent extends React.Component {

    numberChanged = e => {
        let number = parseInt(e.target.value);
        if(isNaN(number)) {
            number = 0;
        }
        this.props.dispatch({
            type:"NUMBER_CHANGED",
            number:number
        })
    }
    render() {
        return <input onChange = {this.numberChanged} type="text"/>
    }
}

let Input = connect (mapper)(InputComponent);

export{Input};