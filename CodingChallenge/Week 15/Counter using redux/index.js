import {createStore} from "redux";

let counterReducer = function (state,action) {
  let newState = {counter:0}

  if(!state || action.type === "RESET" ) { return newState};

  if(action.type === "INCREMENT") {
     newState.counter = state.counter + 1;
  }

  if(action.type === "DECREMENT") {
    newState.counter = state.counter - 1;
 }

 return newState;
}

let counterStore = createStore(counterReducer);


counterStore.subscribe(function () {
 console.log(counterStore.getState())
})

counterStore.dispatch({type:"INCREMENT"});
counterStore.dispatch({type:"INCREMENT"});
counterStore.dispatch({type:"INCREMENT"});
counterStore.dispatch({type:"DECREMENT"});
counterStore.dispatch({type:"RESET"});
