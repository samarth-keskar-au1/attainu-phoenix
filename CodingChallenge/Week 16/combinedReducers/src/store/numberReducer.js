export default function numberReducer(number=null, action ) {
    if(action.type === "SET_NUMBER") {
        return number = action.number;
    }

    return number;
}