var userEmail = document.getElementById('email');
var userPass = document.getElementById('pass');
var userAlert = document.querySelector(".alert");
var login = document.querySelector(".logBtn");

var allUser = JSON.parse(localStorage.getItem("allUser"));

function search() {
  for (var i = 0; i < allUser.length; i++) {
    if (allUser[i].email == userEmail.value &&allUser[i].pass == userPass.value) {

      localStorage.setItem('Valid-Data', `${allUser[i].name}`)
      return "exists";
    }
  }
  return "not existed";
}

login.addEventListener("click", function () {
  if (search() == "exists") {
    login.setAttribute("href", "./home.html");
  } else if (search() == "not existed") {
    userAlert.innerHTML = '<p class="text-warning">incorrect email or password</p>';
  }
});
