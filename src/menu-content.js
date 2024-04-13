export default function menuContent() {
    
    const mainContentSection = document.querySelector("#content");

    // Clear current content
    mainContentSection.textContent = "";

    const menu = document.createElement("h2");
    menu.textContent = "MENU";
    mainContentSection.appendChild(menu);

    return mainContentSection;

};