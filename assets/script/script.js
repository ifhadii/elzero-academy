window.onscroll = function () {
    let header = document.querySelector(".header");
    if (window.scrollY > 50) {
        header.style.backgroundColor = "#010101a6";
    } else {
        header.style.backgroundColor = "transparent";
    }
};


// function toggleDisplayMenu() {
//     let menu = document.querySelector(".header .container .menu .links-header ul");

//     if (menu.style.display === "block" || menu.style.display === "") {
//         menu.style.display = "block";
//     } else {
//         menu.style.display = "none";
//     }
// }

// // Function to handle screen resize and adjust menu layout
// function handleResize() {
//     let menu = document.querySelector(".header .container .menu .links-header ul");
//     if (window.innerWidth > 992) {
//         // Reset to horizontal layout on wide screen
//         menu.style.display = "flex";
//         menu.style.flexDirection = "row";
//     } else {
//         // Set to vertical layout on smaller screens
//         menu.style.flexDirection = "column";
//     }
// }

// // Attach resize event listener to adjust layout on screen change
// window.addEventListener("resize", handleResize);

// // Initialize layout based on current screen size
// handleResize();


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
