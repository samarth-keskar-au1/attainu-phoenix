"use strict";

document.getElementById("btn").addEventListener("click", () => {
  let confirmation = confirm(
    "This cannot be undone.Are you sure you want to delete this post ?"
  );

  if (!confirmation) {
    return;
  }

  let mongoId = document.getElementById("mongoId").value;

  var request = new XMLHttpRequest();
  request.open("post", `/delete/${mongoId}`);
  request.send();
  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
      window.location.href = "/?deleted=true";
    }
  };
});
