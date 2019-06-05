import {store} from './store.js';
export default function subBreedsReducer(subbreeds=[],action) {
    if(action.type === "FETCH_SUB_BREED") {
        fetch(`https://dog.ceo/api/breed/${action.breed}/list`)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                store.dispatch({
                    type: "BREED_LOADED",
                    data: data.message
                });
            })
            .catch(function(err){
                console.log(err);
            });
    }

    if(action.type === "BREED_LOADED") {
       return  action.data;
    }

    return subbreeds;
}