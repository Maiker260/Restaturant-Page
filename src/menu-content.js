export default function menuContent() {
    
    const mainContentSection = document.querySelector("#content");

    // Clear current content
    mainContentSection.textContent = "";

    const container = document.createElement("div");
    container.classList.add("flex");
    container.classList.add("main_container");
    
    const menu = document.createElement("h2");
    menu.classList.add("main_section_title");
    menu.textContent = "MENU";
    container.appendChild(menu);

    mainContentSection.appendChild(container);

    return mainContentSection;

};