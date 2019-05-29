import {createStore} from "redux";

let numberReducer = function (state,action) {
  let newState = { number: 0,isOdd: false,isEven: false}

  if(!state) { return newState};

  if(action.type === "CHECK_NUMBER") {
     newState.number = action.number;
     (action.number % 2 === 0 ) ? newState.isEven = true : newState.isOdd = true;
     return newState;
  }
}


let numberStore = createStore(numberReducer);


numberStore.subscribe(function () {
 console.log(numberStore.getState())
})

numberStore.dispatch({
  type:"CHECK_NUMBER",
  number:123
})