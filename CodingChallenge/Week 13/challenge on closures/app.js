let globalCounter = 0;

document.getElementById("gbutton").addEventListener("click",function () {
    globalCounter = globalCounter + 1;
    document.getElementById("gcounter").innerText = globalCounter;
});


let object = {counter:0};

document.getElementById("obutton").addEventListener("click",function () {
    object.counter = object.counter + 1;
    globalCounter = globalCounter + 1;
    document.getElementById("ocounter").innerText = object.counter;
    document.getElementById("gcounter").innerText = globalCounter;
});


function closureFunction() {
    let counter = 0;
    function Counter() {
        counter = counter + 1
        return counter;
    }
    return Counter;
}

let closureCounter = closureFunction();

  document.getElementById("cbutton").addEventListener("click",function () {
        globalCounter = globalCounter + 1;
        document.getElementById("gcounter").innerText = globalCounter;
        document.getElementById("ccounter").innerText = closureCounter();
  });


