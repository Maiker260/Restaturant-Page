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

    const contactInfo = document.createElement("p");
    contactInfo.classList.add("contact_content");
    contactInfo.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati id earum laboriosam ducimus iste recusandae placeat itaque iure temporibus nemo numquam dignissimos possimus, consequuntur eligendi odio nostrum voluptas culpa distinctio?"
    container.appendChild(contactInfo);

    return mainContentSection;

};