export default function contactContent() {
    
    const mainContentSection = document.querySelector("#content");

    // Clear current content
    mainContentSection.textContent = "";

    const contact = document.createElement("h2");
    contact.textContent = "CONTACT INFORMATION";
    mainContentSection.appendChild(contact);

    return mainContentSection;

};