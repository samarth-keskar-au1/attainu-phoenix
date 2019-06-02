import {createStore} from 'redux';

let reducer = function(oldState, action) {
    let initialState = {
       todos:[]
    };

    if(!oldState) { return initialState; }

    let newState = initialState;

    newState.todos = Array.from(oldState.todos);

    if(action.type == "ADD_TODO") {
       newState.todos.push(action.todo);
    }

    if(action.type == "DELETE_TODO") {
       newState.todos = newState.todos.filter(c => c != action.todo)
     }


    return newState;
}


let store = createStore(reducer);


store.subscribe(function(){
    console.log( store.getState() );
});


function storeMapper(state) {
    return state;
}

export {store, storeMapper};