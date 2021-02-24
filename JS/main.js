
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 4000);
}

function showPage() {
  document.getElementById("loader_screen").style.display = "none";
  document.getElementById("Main").style.display = "block";
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
        document.getElementById("home_header").style.borderBottomColor="#f1f1f1";
    }
    else{
        document.getElementById("home_header").style.borderBottomColor="Transparent";            
    }
}

function showpassword() {
  var x = document.getElementById("password_login");

  if (x.type == "password") {
    x.type = "text";
    document.getElementById("eye").src="Images/visibility-512.png";  
  } else {
    x.type = "password";
    document.getElementById("eye").src="Images/visibility-off-512.png";
  }
}