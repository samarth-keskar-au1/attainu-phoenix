import React from 'react';
import {connect} from 'react-redux';
import {storeMapper} from './store.js';


class SubBreedComponent extends React.Component {

    render() {

        if(this.props.isSubBreedLoading) {
            return <p>Loading SubBreed</p>
        } else {
            return (
                this.props.subbreeds.map(function(b) { 
                    return (
                        <ul class="list-group">
                                <li class="list-group-item">{b}</li>
                        </ul>
                    ); 
                })
            );
        }

       
    }
}

let SubBreed = connect(storeMapper)(SubBreedComponent);

export {SubBreed};