

function myFunction(){
    alert("Hello!");
}

function changeImage() { 
    var pokeballImg = document.getElementById("img01"); 
    pokeballImg.src = "pic/pikachu.png"; 
}

var link = document.getElementById("tw-link");
link.innerHTML = "twitter";

window.onload = Welcome;
function Welcome(){
    var link = document.getElementById("wel");
    link.innerHTML = "Welcome to the Forum";
}



