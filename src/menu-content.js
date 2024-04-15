export default function menuContent() {
    
    const mainContentSection = document.querySelector("#content");

    // Clear current content
    mainContentSection.textContent = "";

    const container = document.createElement("div");
    mainContentSection.appendChild(container);
    const menu = document.createElement("h2");
    menu.textContent = "MENU";
    container.appendChild(menu);

    return mainContentSection;

};