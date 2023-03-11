"use strict";
"usestrict";

const activeChanger = (element) => {
    document.querySelector(".active").classList.remove("active");
    element.classList.add("active");
    document.getElementById("navbarNav").classList.toggle("show");
}

const copyNumber = () => {
    var copyText = "+995 579 44 12 44";
    navigator.clipboard.writeText(copyText);
  }

const loadScript = () => {    
    document.querySelectorAll(".nav-item").forEach(element => {
        element.addEventListener("click", () => activeChanger(element))
    });
    document.getElementById("phone_number").addEventListener("click", copyNumber)
}

document.addEventListener("click", function (event) {
  var navbar = document.querySelector(".navbar-collapse");
  var button = document.querySelector(".navbar-toggler");
  if (!navbar.contains(event.target) || button.contains(event.target)) {
    navbar.classList.remove("show");
  }
});


document.addEventListener("DOMContentLoaded", loadScript);