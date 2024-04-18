export default function aboutContent() {
    
    const mainContentSection = document.querySelector("#content");

    // Clear current content
    mainContentSection.textContent = "";

    const container = document.createElement("div");
    container.classList.add("flex");
    container.classList.add("main_container");

    const about = document.createElement("h2");
    about.textContent = "ABOUT";
    about.classList.add("main_section_title");
    container.appendChild(about);

    mainContentSection.appendChild(container);

    const mission = document.createElement("p");
    mission.classList.add("about_content");
    mission.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati id earum laboriosam ducimus iste recusandae placeat itaque iure temporibus nemo numquam dignissimos possimus, consequuntur eligendi odio nostrum voluptas culpa distinctio?"
    container.appendChild(mission);



    return mainContentSection;

};
