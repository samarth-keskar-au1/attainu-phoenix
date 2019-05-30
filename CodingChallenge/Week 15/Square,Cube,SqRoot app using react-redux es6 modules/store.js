import {createStore} from "redux";

let reducer = function (state, action) {
    let newState = {
        number:0,
        result:null
    }

if(!state) {return newState};

if(action.type === "NUMBER_CHANGED") {
    newState.number = action.number
    }

if(action.type === "SQUARE") {
    newState.number = state.number;
    newState.result =  newState.number *  newState.number;
    }

if(action.type === "CUBE") {
    newState.number = state.number;
    newState.result =  newState.number *  newState.number * newState.number;
    }

if(action.type === "ROOT") {
        newState.number = state.number;
        newState.result = Math.sqrt(newState.number)
    }
    
return newState;

}

let store = createStore(reducer);

let mapper = function (state) {
    return state;
}

export {store,mapper};