document.body.style.backgroundColor = "red";

let time = 5000;

function colorChanger() {
    document.body.style.backgroundColor == "red" ? document.body.style.backgroundColor = "green" : document.body.style.backgroundColor = "red";
};

let Timer = setInterval(colorChanger,time);

let Slow = document.getElementById("tor");
    Slow.addEventListener("click",function(){
    clearInterval(Timer);
      time = time / 2;
      Timer = setInterval(colorChanger,time);
    });

let Fast = document.getElementById("rabbit");
Fast.addEventListener("click",function(){
    clearInterval(Timer);
    time = time * 2;
    Timer = setInterval(colorChanger,time);
});


