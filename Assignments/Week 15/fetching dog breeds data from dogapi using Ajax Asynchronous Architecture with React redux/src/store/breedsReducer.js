import {store} from './store.js';

export default function breedsReducer(breeds=[],action) {
    if(action.type === "FETCH_MENU") {

        fetch("https://dog.ceo/api/breeds/list/all")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                store.dispatch({
                    type: "MENU_LOADED",
                    data: Object.keys(data.message)
                });
            })
            .catch(function(err){
                console.log(err);
            });
    }

    if(action.type === "MENU_LOADED") {
       return action.data
    }

    return breeds;
}