import React from "react";
import {connect} from "react-redux";
import {mapper} from "../store.js";

class DisplayComponent extends React.Component {
    render() {
        if (this.props.number === 0) {
           return <h2>Please enter some number to see the results</h2>;
        }  
        if(!this.props.result) {
            return <h2></h2>;  
        }

        return <h2>Result:{this.props.result}</h2>;
    }
}

let Display = connect(mapper)(DisplayComponent);

export{Display};