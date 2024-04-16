export default function contactContent() {
    
    const mainContentSection = document.querySelector("#content");

    // Clear current content
    mainContentSection.textContent = "";

    const container = document.createElement("div");
    container.classList.add("flex");
    container.classList.add("main_container");

    const contact = document.createElement("h2");
    contact.textContent = "CONTACT INFORMATION";
    contact.classList.add("main_section_title");
    container.appendChild(contact);

    mainContentSection.appendChild(container);

    return mainContentSection;

};