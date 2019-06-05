import {createStore, combineReducers} from 'redux';
import numberReducer from './numberReducer.js';
import squareReducer from './squareReducer.js';
import sqrtReducer from './sqrtReducer.js';

let reducer = combineReducers({
       number:numberReducer,
       square:squareReducer,
       sqrt:sqrtReducer
    })


let store = createStore(reducer);


store.subscribe(function(){
    console.log( store.getState() );
});


store.dispatch({
    type:"SET_NUMBER",
    number:9
})

store.dispatch({
    type:"SET_NUMBER",
    number:16
})

store.dispatch({
    type:"SET_NUMBER",
    number:25
})

store.dispatch({
    type:"SET_NUMBER",
    number:49
});

function storeMapper(state) {
    return state;
}

export {store, storeMapper};