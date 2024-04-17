export default function homepageContent() {
    
    const mainContentSection = document.querySelector("#content");

    // Clear current content
    mainContentSection.textContent = "";

    const container = document.createElement("div");
    container.classList.add("flex");
    // container.classList.add("main_container");
    container.classList.add("homepage_main_container");

    const greeting = document.createElement("h2");
    greeting.textContent = "Welcome to Odin Restaurant";
    greeting.classList.add("home_section_title");
    container.appendChild(greeting);

    const GoToMenuBtn = document.createElement("button");
    GoToMenuBtn.textContent = "Go to the Menu";
    GoToMenuBtn.classList.add("home_section_btn");
    container.appendChild(GoToMenuBtn);

    mainContentSection.appendChild(container);

    return mainContentSection;

};