import React from 'react';
import {connect} from 'react-redux';
import {Button} from './Button.js'
import {storeMapper} from '../store/store.js';


class MenuComponent extends React.Component {

    componentDidMount() {
        this.props.dispatch({
            type: "FETCH_MENU"
        });
    }

    render() {

        if(this.props.isMenuLoading) {
            return <p>Loading Menu...</p>
        } else {
            return (
                this.props.breeds.map(function(b) { 
                    return (<Button key={b} b={b}/>); 
                })
            );
        }

       
    }
}

let Menu = connect(storeMapper)(MenuComponent);

export {Menu};