import heroSection from "../components/hero";
import backgroundSection from "../components/background";
import bookTablePage from "./book";

export default function indexInit() {
    document.title = "Home @ noma";
    heroSection();
    backgroundSection();

    const bookBtn = (() => {
        const menuButton = document.querySelector(".book-btn");
    
        menuButton.addEventListener("click", () => {
            content.textContent = " ";
            bookTablePage();
        });
    })();
}