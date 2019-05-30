import React from "react";
import {Provider} from "react-redux";

import{Display} from "./Display.js"
import{Input} from "./Input.js"
import{Button} from "./Button.js"

import {store} from "../store.js"

class App extends React.Component {
    render() {
        return(
            <Provider store = {store}>
                <div>
                    <Input/>
                    <Button/>
                    <Display/>
                </div>
            </Provider>
        );
    }
}

export {App};