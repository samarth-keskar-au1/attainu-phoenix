"use strict";

let todo = [];

const updateContent = function() {
  let tbody = document.getElementById("tbody");

  tbody.innerHTML = "";

  for (let i = 0; i < todo.length; i++) {
    let tr = document.createElement("tr");
    let title = document.createElement("td");
    let des = document.createElement("td");

    title.innerText = todo[i].title;
    des.innerText = todo[i].des;

    tr.appendChild(title);
    tr.appendChild(des);

    tbody.append(tr);
  }
};

let btn = document.getElementById("btn");
btn.addEventListener("click", function() {
  let usrTitle = document.getElementById("title").value;
  var usrDes = document.getElementById("des").value;

  if (usrTitle == "") {
    alert("Enter The Title Please");
    return;
  } else if (usrDes == "") {
    alert("enter The Description");
    return;
  }

  var data = {
    title: usrTitle,
    des: usrDes
  };

  var request = new XMLHttpRequest();
  request.open("post", "/");

  // Tell browser and the server that we are sending JSON data
  request.setRequestHeader("content-type", "application/json");
  request.send(JSON.stringify(data));

  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
      todo.push(data);
      updateContent();
    }
  };
});

const loadTasks = function() {
  var request = new XMLHttpRequest();
  request.open("get", "/list");
  request.send();
  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
      todo = JSON.parse(request.responseText);
      updateContent();
    }
  };
};

loadTasks();
