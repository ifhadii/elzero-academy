// fun change header color on scroll
window.onscroll = function() {
    var header = document.querySelector('.header');
    if (window.scrollY > 50) { 
        header.style.backgroundColor = "#010101a6";
    } else {
        header.style.backgroundColor = "transparent";
    }
};
