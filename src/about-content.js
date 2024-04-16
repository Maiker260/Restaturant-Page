export default function aboutContent() {
    
    const mainContentSection = document.querySelector("#content");

    // Clear current content
    mainContentSection.textContent = "";

    const container = document.createElement("div");
    container.classList.add("flex");
    container.classList.add("main_container");

    const about = document.createElement("h2");
    about.textContent = "ABOUT INFORMATION";
    about.classList.add("main_section_title");
    container.appendChild(about);

    mainContentSection.appendChild(container);



    return mainContentSection;

};