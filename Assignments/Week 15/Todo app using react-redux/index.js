import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store.js';
import{Display} from './Display.js';


class App extends React.Component {
    render() {
        return (
            <div className="container-fluid m-3">
                <div className="row">
                <Provider store={store}>
                  <div className="col-md-4 offset-md-4">
                      <Display/>
                  </div>
                    </Provider>
                </div>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById("root"));