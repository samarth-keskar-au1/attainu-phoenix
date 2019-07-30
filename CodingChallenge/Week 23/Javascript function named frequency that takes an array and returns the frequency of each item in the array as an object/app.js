const frequency = names => {
    let obj ={}; 
    names.forEach(element => obj[element] = obj[element] ? obj[element]+1 : 1);
    return obj;
}
let names = ["sam","ansal","divyam","vaibhav","sam","ansal"];
console.log(frequency(names));