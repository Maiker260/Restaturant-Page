export default function homepageContent() {
    
    const mainContentSection = document.querySelector("#content");

    // Clear current content
    mainContentSection.textContent = "";

    const container = document.createElement("div");
    const greeting = document.createElement("h2");
    greeting.textContent = "Welcome to Odin Restaurant";
    container.appendChild(greeting);

    const GoToMenuBtn = document.createElement("button");
    GoToMenuBtn.textContent = "Go to the Menu";
    container.appendChild(GoToMenuBtn);

    mainContentSection.appendChild(container);

    return mainContentSection;

};