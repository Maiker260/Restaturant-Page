// Script Files
import showHomepageContent from "./homepage-content";
import showMenuContent from "./menu-content";
import showAboutContent from "./about-content";
import showContactContent from "./contact-content";

// Style Files
import "./style.css";


// Event Listeners for the NavBar
function eventListeners() {
    const homeBtn = document.querySelector("#home_nav_btn");
    const menuBtn = document.querySelector("#menu_nav_btn");
    const aboutBtn = document.querySelector("#about_nav_btn");
    const contactBtn = document.querySelector("#contact_nav_btn");
    const mainTitle = document.querySelector("#main_logo_title");

    homeBtn.addEventListener("click", showHomepageContent);
    window.addEventListener("DOMContentLoaded", showHomepageContent);
    menuBtn.addEventListener("click", showMenuContent);
    aboutBtn.addEventListener("click", showAboutContent);
    contactBtn.addEventListener("click", showContactContent);
    mainTitle.addEventListener("click", showHomepageContent);
}

const navButtons = eventListeners();