import showMenuContent from "./menu-content";

export default function homepageContent() {
    
    const mainContentSection = document.querySelector("#content");

    // Clear current content
    mainContentSection.textContent = "";

    const container = document.createElement("div");
    container.classList.add("flex");
    container.classList.add("homepage_main_container");

    const greeting = document.createElement("h2");
    greeting.textContent = "Welcome to Odin Restaurant";
    greeting.classList.add("home_section_title");
    container.appendChild(greeting);

    const GoToMenuBtn = document.createElement("button");
    GoToMenuBtn.textContent = "Go to the Menu";
    GoToMenuBtn.setAttribute("id", "GoToMenuBtn");
    GoToMenuBtn.classList.add("home_section_btn");
    container.appendChild(GoToMenuBtn);

    GoToMenuBtn.addEventListener("click", showMenuContent);

    mainContentSection.appendChild(container);

    return mainContentSection;

};