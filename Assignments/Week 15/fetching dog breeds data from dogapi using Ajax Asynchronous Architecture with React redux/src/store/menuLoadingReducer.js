export default function isMenuLoadingReducer(isMenuLoading = false, action ) {
    if(action.type === "FETCH_MENU") {
        return true;
    }
    if(action.type === "MENU_LOADED") {
        return false;
    }

    return isMenuLoading;
}