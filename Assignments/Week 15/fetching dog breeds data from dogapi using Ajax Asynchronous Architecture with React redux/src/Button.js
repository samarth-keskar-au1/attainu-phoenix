import React from 'react';
import {connect} from 'react-redux';

import {storeMapper} from './store.js';

class ButtonComponent extends React.Component {

    subBreed = () => {
        this.props.dispatch({
            type:"FETCH_SUB_BREED",
            breed:this.props.b
        })
    }

    loadImages = () => {
        this.props.dispatch({
            type:"FETCH_IMAGES",
            breed:this.props.b
        })
    }
    
    render() {
        return (
        <button onClick = {() => {this.subBreed();this.loadImages();}} className="btn btn-secondary m-2">{this.props.b}</button>
        );
    }
}






let Button = connect(storeMapper)(ButtonComponent);

export {Button};