"use strict";


$(document).ready(function(){
    let data = [];
    let countdown = 30;
    let timer;
    
    
    let countClock = function () { 
        countdown--;
        if (countdown <= 0) {
            // disabling the submit= countdown; button if timer runs out
            $("#submit").css("display","none");
            clearInterval(timer);
            return alert("So Slow. Try Another Time");
        }
        $("#clock").text(countdown);
    };
    
    let x = Math.floor(Math.random() * 10);
    
    let updateContent = function (data) {
        //timer functions
        timer = setInterval(countClock, 1000);
    
        // generating gibberish questions
    
        let question = data[x]["question"];
        $("#question").text(question);
    };
    
    let updateFunc = function () {

        $.get("quiz.json", function(Data){
            data = Data;
            updateContent(Data);
          });
      
    };
    
    updateFunc();
    
    $("#submit").click(function () {
        let inputAns = $("#inputText").val();
    
        let Ans = data[x].answer;
    
        //   to check if the answer is correct or wrong
        if (Ans == inputAns) {
            alert("Jackpot You Answered It Correctly");
            $("#submit").css("display", "none");
            clearInterval(timer);
        } else {
            $("#submit").css("display", "none");
            alert("Too Bad Wrong Answer");
            clearInterval(timer);
        }
    });

  });
