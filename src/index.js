import "./styles/reset.css";
import "./styles/style.css";

import indexInit from "./pages/home.js";
import menuPage from "./pages/menu.js";
import bookTablePage from "./pages/book.js";

const content = document.querySelector("#content");

const navMenu = (() => {
    const menuButton = document.querySelector("#nav-menu");

    menuButton.addEventListener("click", () => {
        content.textContent = " ";
        menuPage();
    });
})();

const navHome = (() => {
    const menuButton = document.querySelector("#nav-home");

    menuButton.addEventListener("click", () => {
        content.textContent = " ";
        indexInit();
    });
})();

const navBook = (() => {
    const menuButton = document.querySelector("#nav-book");

    menuButton.addEventListener("click", () => {
        content.textContent = " ";
        bookTablePage();
    });
})();

indexInit();

