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



let closureFunction = (function () {
    let closureCounter = 0;
    return function () {
        closureCounter = closureCounter + 1;
        globalCounter = globalCounter + 1;
        document.getElementById("ccounter").innerText = closureCounter;
        document.getElementById("gcounter").innerText = globalCounter;
    }
  })();

  document.getElementById("cbutton").addEventListener("click",closureFunction);


