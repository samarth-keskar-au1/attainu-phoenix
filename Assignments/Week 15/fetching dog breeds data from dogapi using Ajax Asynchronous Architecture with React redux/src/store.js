import {createStore} from 'redux';

let reducer = function(oldState, action) {
    let initialState = {
        isMenuLoading: false,
        isSubBreedLoading:false,
        isImagesLoading:false,
        breeds: [],
        subbreeds:[],
        images:[]
    };

    if(!oldState) { return initialState; }

    let newState = initialState;

    if(action.type == "FETCH_MENU") {

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

        newState.isMenuLoading = true;
    }

    if(action.type == "FETCH_SUB_BREED") {

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
        newState.breeds = oldState.breeds;
        newState.isSubBreedLoading = true;
    }

    if(action.type == "FETCH_IMAGES") {

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
        newState.breeds = oldState.breeds;
        newState.subbreeds = oldState.subbreeds;
        newState.isImagesLoading= true;
    }


    if(action.type == "MENU_LOADED") {
        newState.breeds = action.data;
    }

    if(action.type == "BREED_LOADED") {
        newState.breeds = oldState.breeds;
        newState.subbreeds = action.data;
    }

    if(action.type == "IMAGES_LOADED") {
        newState.breeds = oldState.breeds;
        newState.subbreeds = oldState.subbreeds;
        newState.images = action.data;
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