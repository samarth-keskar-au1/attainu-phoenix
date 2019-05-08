"use strict";

let contactList = [];

const updateContent = function () {
  let tbody = document.getElementById("tbody");

  tbody.innerHTML = "";

  for (let i = 0; i < contactList.length; i++) {
    let tr = document.createElement("tr");
    let name = document.createElement("td");
    let phone = document.createElement("td");

    name.innerText = contactList[i].name;
    phone.innerText = contactList[i].phone;

    tr.appendChild(name);
    tr.appendChild(phone);

    tbody.append(tr);
  }
};

let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  let usrName = document.getElementById("name").value;
  var usrPhone = document.getElementById("phone").value;

  if (usrName == "") {
    alert("Enter The Name Please");
    return;
  } else if (usrPhone == "") {
    alert("Enter The Phone Number Please");
    return;
  }

  var data = {
    name: usrName,
    phone: usrPhone
  };

  var request = new XMLHttpRequest();
  request.open("post", "/");

  // Tell browser and the server that we are sending JSON data
  request.setRequestHeader("content-type", "application/json");
  request.send(JSON.stringify(data));

  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      contactList.push(data);
      updateContent();
    }
  };
});

const loadContacts = function () {
  var request = new XMLHttpRequest();
  request.open("get", "/list");
  request.send();
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      contactList = JSON.parse(request.responseText);
      updateContent();
    }
  };
};

loadContacts();