export default function isImagesLoadingReducer(isImagesLoading = false, action ) {
    if(action.type === "FETCH_IMAGES") {
        return true;
    }
    if(action.type === "IMAGES_LOADED") {
        return false;
    }

    return isImagesLoading;
}