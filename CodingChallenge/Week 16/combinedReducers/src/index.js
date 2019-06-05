import React from 'react';
import ReactDOM from 'react-dom';
import {store} from './store/store.js';


class App extends React.Component {
    render() {
        return ( <h1>combinedReducers</h1> );
    };
}


ReactDOM.render(<App />, document.getElementById("root"));