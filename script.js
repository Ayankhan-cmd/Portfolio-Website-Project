// const menuButton = document.querySelector("#menu-icon");
// const navigation = document.querySelector(".nav-links");

// menuButton.addEventListener("click", () => {
//     const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
//     menuButton.setAttribute("aria-expanded", String(!isExpanded));
//     menuButton.setAttribute(
//         "aria-label",
//         isExpanded ? "Open navigation menu" : "Close navigation menu"
//     );
//     navigation.classList.toggle("active", !isExpanded);
//     menuButton.querySelector("i").classList.toggle("fa-bars", isExpanded);
//     menuButton.querySelector("i").classList.toggle("fa-xmark", !isExpanded);
// });

// navigation.querySelectorAll("a").forEach((link) => {
//     link.addEventListener("click", () => {
//         menuButton.setAttribute("aria-expanded", "false");
//         menuButton.setAttribute("aria-label", "Open navigation menu");
//         navigation.classList.remove("active");
//         menuButton.querySelector("i").classList.replace("fa-xmark", "fa-bars");
//     });
// });

const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-link');

menuIcon.oneclick = () => {
    navLinks.classList.toggle('active');             
}