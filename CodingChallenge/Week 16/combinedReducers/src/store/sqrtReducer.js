export default function subBreedsReducer(sqrt=null,action) {
     if(action.type === "SET_NUMBER") {
       return  sqrt = Math.sqrt(action.number);
    }

    return sqrt;
}