window.onscroll = function() {
    var header = document.querySelector('.header');
    if (window.scrollY > 50) { // Adjust the scroll distance as needed
        header.style.backgroundColor = "#010101a6";
    } else {
        // Original color or transparent
        header.style.backgroundColor = "transparent";
    }
};

function main() {
   // will see 
}