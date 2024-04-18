export default function menuContent() {
    
    const mainContentSection = document.querySelector("#content");

    // Clear current content
    mainContentSection.textContent = "";

    const container = document.createElement("div");
    container.classList.add("flex");
    container.classList.add("menu_main_container");
    
    const menu = document.createElement("h2");
    menu.classList.add("menu_title");
    menu.textContent = "MENU";
    container.appendChild(menu);

    mainContentSection.appendChild(container);


    // Add the Menu Items
    const mainDish = document.createElement("h3");
    mainDish.classList.add("menu_section_title");
    mainDish.textContent = "Main Dish";
    container.appendChild(mainDish);
    container.appendChild(createMenu(mainDishItems));

    const drink = document.createElement("h3");
    drink.classList.add("menu_section_title");
    drink.classList.add("menu_section_title_bottom");
    drink.textContent = "Drinks";
    container.appendChild(drink);
    container.appendChild(createMenu(drinksItems));

    const desserts = document.createElement("h3");
    desserts.classList.add("menu_section_title");
    desserts.classList.add("menu_section_title_bottom");
    desserts.textContent = "Desserts";
    container.appendChild(desserts);
    container.appendChild(createMenu(dessertsItems));


    return mainContentSection;

};


// Create the Menu Dinamically depending on the items on the list.
const mainDishItems =  [
    { name: "Spaghetti Carbonara", price: "$12.99" },
    { name: "Margherita Pizza", price: "$10.99" },
    { name: "Grilled Salmon", price: "$15.99" },
    // More Items in the list.......
    { name: "Spaghetti Carbonara", price: "$12.99" },
    { name: "Margherita Pizza", price: "$10.99" },
    { name: "Grilled Salmon", price: "$15.99" },
    // More Items in the list.......
    { name: "Spaghetti Carbonara", price: "$12.99" },
    { name: "Margherita Pizza", price: "$10.99" },
    { name: "Grilled Salmon", price: "$15.99" },
    // More Items in the list.......
    { name: "Spaghetti Carbonara", price: "$12.99" },
    { name: "Margherita Pizza", price: "$10.99" },
    { name: "Grilled Salmon", price: "$15.99" }
    // More Items in the list.......
    
];

const drinksItems = [
    { name: "Coca-Cola", price: "$2.99" },
    { name: "Fresh Orange Juice", price: "$4.99" },
    { name: "Coffee", price: "$3.49" },
    // More Items in the list.......
    { name: "Coca-Cola", price: "$2.99" },
    { name: "Fresh Orange Juice", price: "$4.99" },
    { name: "Coffee", price: "$3.49" },
    // More Items in the list.......
    { name: "Coca-Cola", price: "$2.99" },
    { name: "Fresh Orange Juice", price: "$4.99" },
    { name: "Coffee", price: "$3.49" },
    // More Items in the list.......
    { name: "Coca-Cola", price: "$2.99" },
    { name: "Fresh Orange Juice", price: "$4.99" },
    { name: "Coffee", price: "$3.49" },
    // More Items in the list.......
];

const dessertsItems = [
    { name: "Chocolate Brownie", price: "$6.99" },
    { name: "Vanilla Ice Cream", price: "$4.99" },
    { name: "Cheesecake", price: "$7.49" },
    // More Items in the list.......
    { name: "Chocolate Brownie", price: "$6.99" },
    { name: "Vanilla Ice Cream", price: "$4.99" },
    { name: "Cheesecake", price: "$7.49" },
    // More Items in the list.......
    { name: "Chocolate Brownie", price: "$6.99" },
    { name: "Vanilla Ice Cream", price: "$4.99" },
    { name: "Cheesecake", price: "$7.49" },
    // More Items in the list.......
    { name: "Chocolate Brownie", price: "$6.99" },
    { name: "Vanilla Ice Cream", price: "$4.99" },
    { name: "Cheesecake", price: "$7.49" },
    // More Items in the list.......
];


function createMenu(menuSection) {

    const dishContainer = document.createElement("div");
    // dishContainer.classList.add("flex");
    dishContainer.classList.add("dish_container");

    menuSection.forEach(item => {
        const itemContainer = document.createElement("div");
        itemContainer.classList.add("flex");
        itemContainer.classList.add("item_container");

        const itemName = document.createElement("p");
        itemName.textContent = item.name;
        itemName.classList.add("dish_name");
        itemName.classList.add("item_details");
        const itemPrice = document.createElement("p");
        itemPrice.textContent = item.price;
        itemPrice.classList.add("dish_price");
        itemPrice.classList.add("item_details");
        
        itemContainer.appendChild(itemName);
        itemContainer.appendChild(itemPrice);

        dishContainer.appendChild(itemContainer);
    });

    return dishContainer;
}