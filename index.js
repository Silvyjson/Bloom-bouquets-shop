const listElement = document.querySelector(".bloom_nav--content");
const menuIcon = document.querySelector(".menu-icon");

const toggleList = () => {
    menuIcon.classList.toggle("open");
    listElement.classList.toggle("show_nav");
}