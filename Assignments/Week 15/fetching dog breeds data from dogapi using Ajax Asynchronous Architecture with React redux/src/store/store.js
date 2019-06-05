import {createStore, combineReducers} from 'redux';
import isMenuLoadingReducer from './menuLoadingReducer.js';
import isSubBreedLoadingReducer from './subBreedLoadingReducer.js';
import isImagesLoadingReducer from './imagesLoadingReducer.js';
import breedsReducer from './breedsReducer.js'
import subBreedsReducer from './subBreedsReducer.js';
import imagesReducer from './imagesReducer.js';

let reducer = combineReducers({
        isMenuLoading: isMenuLoadingReducer,
        isSubBreedLoading:isSubBreedLoadingReducer,
        isImagesLoading:isImagesLoadingReducer,
        breeds: breedsReducer,
        subbreeds:subBreedsReducer,
        images:imagesReducer
    })


let store = createStore(reducer);


store.subscribe(function(){
    console.log( store.getState() );
});


function storeMapper(state) {
    return state;
}

export {store, storeMapper};