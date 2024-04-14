export default function homepageContent() {
    
    const mainContentSection = document.querySelector("#content");

    // Clear current content
    mainContentSection.textContent = "";

    const greeting = document.createElement("h2");
    greeting.textContent = "Welcome to Odin Restaurant";
    mainContentSection.appendChild(greeting);

    const GoToMenuBtn = document.createElement("button");
    GoToMenuBtn.textContent = "Go to the Menu";
    mainContentSection.appendChild(GoToMenuBtn);

    return mainContentSection;

};