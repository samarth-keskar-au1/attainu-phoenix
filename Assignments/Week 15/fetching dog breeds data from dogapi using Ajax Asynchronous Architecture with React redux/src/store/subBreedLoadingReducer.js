export default function isSubBreedLoadingReducer(isSubBreedLoading = false, action ) {
    if(action.type === "FETCH_SUB_BREED") {
        return true;
    }
    if(action.type === "BREED_LOADED") {
        return false;
    }

    return isSubBreedLoading;
}