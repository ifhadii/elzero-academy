window.onscroll = function() {
    let header = document.querySelector(".header");
    if (window.scrollY > 50) { 
        header.style.backgroundColor = "#010101a6";
    } else {
        header.style.backgroundColor = "transparent";
    }
};


function toggleDisplayMenu() {
    let menu = document.querySelector(".header .container .menu .links-header ul");

    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}
