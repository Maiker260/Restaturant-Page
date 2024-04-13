export default function homepageContent() {
    
    const mainContentSection = document.querySelector("#content");

    // Clear current content
    mainContentSection.textContent = "";

    const greeting = document.createElement("h2");
    greeting.textContent = "Welcome to Odin Restaurant";
    mainContentSection.appendChild(greeting);

    return mainContentSection;

};