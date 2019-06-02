import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store.js';
import {Menu} from './Menu.js';
import {SubBreed} from './SubBreed.js';
import {Images} from './Images.js';


class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                <Provider store={store}>
                    <div className="col-md-3">

                        <h2>Dog Breeds</h2>
                        <hr/>
                            
                            <div className="btn-group-vertical">
                                <Menu />
                            </div>

                    </div>

                    <div className="col-md-3">

                            <h2>Dog SubBreeds</h2>
                            <hr/>
                                
                            <SubBreed/>

                            </div>

                            <div className="col-md-6">

                            <h2>Images</h2>
                            <hr/>
                                
                            <Images/>

                            </div>
                    </Provider>
                </div>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById("root"));