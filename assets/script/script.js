window.onscroll = function() {
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

