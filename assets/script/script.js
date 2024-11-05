// on.scroll effect
window.onscroll = function () {
    
    // header
    let header = document.querySelector(".header");
    if (window.scrollY > 50) {
        header.style.backgroundColor = "#010101a6";
    } else {
        header.style.backgroundColor = "transparent";
    }

    // button-up
    toggleButtonVisibility();
};

// thin card styleiztion
const techElements = document.getElementsByClassName("technology");

for (let i = 0; i < techElements.length; i++) {
    const techName = techElements[i].innerText;
    if (techName === "Wordpress") {
        techElements[i].style.backgroundColor = "#d54e21";
    } else if (techName === "Vuejs") {
        techElements[i].style.backgroundColor = "#42b883";
    } else if (techName === "Javascript") {
        techElements[i].style.backgroundColor = "#f7df1e";
        techElements[i].style.color = "#333";
    } else if (techName === "Programming") {
        techElements[i].style.backgroundColor = "#7552cc";
    }
}

let button = document.querySelector(".button-up");
button.style.display = "none";

// button up feature
function toggleButtonVisibility() {
    const button = document.querySelector(".button-up");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.opacity = 1;
        button.style.transition = "0.3s ease-in"
        button.style.visiblity = "visible";
        button.style.display = "block";
    } else { 
        button.style.opacity = 0;
        button.style.visiblity = "hidden";
    }
}
