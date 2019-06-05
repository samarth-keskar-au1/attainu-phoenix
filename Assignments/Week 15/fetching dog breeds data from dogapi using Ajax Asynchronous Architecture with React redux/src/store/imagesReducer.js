import {store} from './store.js';
export default function imagesReducer(images=[],action) {  
    if(action.type === "FETCH_IMAGES") {

        fetch(`https://dog.ceo/api/breed/${action.breed}/images`)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                store.dispatch({
                    type: "IMAGES_LOADED",
                    data: data.message
                });
            })
            .catch(function(err){
                console.log(err);
            });
    }

    if(action.type === "IMAGES_LOADED") {
        return action.data
    }
    return images;
}