import imgIngredients from "../assets/images/ingredients.webp";
import imgPlate from "../assets/images/plate.webp";

import createButton from "../components/button";
import bookTablePage from "./book";

const pageContent = document.querySelector("#content");

export default function menuPage() {
    document.title = "Menu @ noma";

    const menu = document.createElement("section");
    const menuImage1 = document.createElement("img");
    const menuImage2 = document.createElement("img");
    const menuContentContainer = document.createElement("div");
    const menuTitle = document.createElement("h2");
    const menuText1 = document.createElement("p");
    const menuText2 = document.createElement("p");
    const menuPricingList = document.createElement("ul");
    const menuPricingItem1 = document.createElement("li");
    const menuPricingItem2 = document.createElement("li");
    const menuPricingItem3 = document.createElement("li");
    const menuPricingItem4 = document.createElement("li");
    const menuButton = createButton("Book Table");

    menu.id = "menu-section";
    menuImage1.src = imgIngredients;
    menuImage2.src = imgPlate;
    menuContentContainer.classList.add("menu-content-container");
    menuTitle.classList.add("menu-title", "page-title");
    menuText1.classList.add("menu-text");
    menuText2.classList.add("menu-text");
    menuPricingList.classList.add("menu-pricing-container");

    menuTitle.textContent = "A blend of Nordic culinary innovation with Japanese traditions and ingredients";
    menuText1.textContent =
        "We use nordic cooking techniques to make contemporary food with carefully selected seasonal ingredients and japanese flavors. This fusion creates a unique dining experience that showcases - Seasonal Japanese ingredients - Nordic cooking techniques and philosophy - Local Kyoto food culture";
    menuText2.textContent =
        "Reservations for noma Kyoto will be available only as a prepaid package including menu, beverage pairing, and tea / coffee. The price of the enu and beverage package is 840$ +10% service charge per person. Guests also have the option to stay at the restaurant for two nights recovering from the dining experience, which also require signing an NDA.";
    menuPricingItem1.textContent = "Menu 540$";
    menuPricingItem2.textContent = "Beverage 300$";
    menuPricingItem3.textContent = "Two night stay: 1 bed 100$";
    menuPricingItem4.textContent = "Two night stay: 2 beds 230$";

    pageContent.appendChild(menu);
    menu.appendChild(menuImage1);
    menu.appendChild(menuImage2);
    menu.appendChild(menuContentContainer);
    menuContentContainer.appendChild(menuTitle);
    menuContentContainer.appendChild(menuText1);
    menuContentContainer.appendChild(menuText2);
    menuContentContainer.appendChild(menuPricingList);
    menuContentContainer.appendChild(menuButton);
    menuPricingList.appendChild(menuPricingItem1);
    menuPricingList.appendChild(menuPricingItem2);
    menuPricingList.appendChild(menuPricingItem3);
    menuPricingList.appendChild(menuPricingItem4);

    const bookBtn = (() => {
        const menuButton = document.querySelector(".book-btn");
    
        menuButton.addEventListener("click", () => {
            content.textContent = " ";
            bookTablePage();
        });
    })();
}