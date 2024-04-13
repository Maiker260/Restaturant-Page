export default function aboutContent() {
    
    const mainContentSection = document.querySelector("#content");

    // Clear current content
    mainContentSection.textContent = "";

    const about = document.createElement("h2");
    about.textContent = "ABOUT INFORMATION";
    mainContentSection.appendChild(about);

    return mainContentSection;

};