export default function squareReducer(square=null, action ) {
    if(action.type === "SET_NUMBER") {
        return square = action.number * action.number;
    }

    return square;
}