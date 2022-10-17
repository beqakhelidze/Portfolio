"use strict";
"usestrict";

const activeChanger = (element) => {
    document.querySelector(".active").classList.remove("active");
    element.classList.add("active");
}

const copyNumber = () => {
    var copyText = "+995 579 44 12 44";
    navigator.clipboard.writeText(copyText);
    alert("Copied the text: " + copyText);
  }

const loadScript = () => {    
    document.querySelectorAll(".nav-item").forEach(element => {
        element.addEventListener("click", () => activeChanger(element))
    });

    document.getElementById("phone_number").addEventListener("click", copyNumber)
}


document.addEventListener("DOMContentLoaded", loadScript);