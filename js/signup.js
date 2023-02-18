var userName = document.getElementById('name');
var userEmail = document.getElementById("email");
var userPass = document.getElementById('pass');
var signUp = document.querySelector(".regBtn");
var userAlert = document.querySelector(".alert");

var allUser = [];
if (localStorage.getItem("allUser") == null) {
  allUser = [];
} else {
    allUser = JSON.parse(localStorage.getItem("allUser"));
}

signUp.addEventListener("click", function () {
  var user = {
    name: userName.value,
    email: userEmail.value,
    pass: userPass.value,
  };
  if (search() == "exists") {
    userAlert.innerHTML = '<p class="text-warning">email already exists</p>';
  } else if (search() == "not existed") {
    allUser.push(user);
    localStorage.setItem("allUser", JSON.stringify(allUser));
    userAlert.innerHTML = '<p class="text-success">Success</p>';
  }
});

function search() {
  for (var i = 0; i < allUser.length; i++) {
    if (allUser[i].email == userEmail.value) {
      return "exists";
    }
  }
  return "not existed";
}