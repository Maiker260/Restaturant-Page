import homepageContent from "./homepage-content";
import menuContent from "./menu-content";
import aboutContent from "./about-content";
import contactContent from "./contact-content";

function eventListeners() {

    const homeBtn = document.querySelector("#home_nav_btn");
    const menuBtn = document.querySelector("#menu_nav_btn");
    const aboutBtn = document.querySelector("#about_nav_btn");
    const contactBtn = document.querySelector("#contact_nav_btn");

    homeBtn.addEventListener("click", homepageContent);
    menuBtn.addEventListener("click", menuContent);
    aboutBtn.addEventListener("click", aboutContent);
    contactBtn.addEventListener("click", contactContent);

}

const navButtons = eventListeners();