import image from "../assets/images/team.webp";

const pageContent = document.querySelector("#content");

export default function heroSection() {
    const hero = document.createElement("section");
    const heroTitle = document.createElement("p");
    const heroImg = document.createElement("img");

    hero.id = "hero-section";
    heroTitle.classList.add("hero-title");

    heroTitle.textContent = "Noma Kyoto is a pop-up restaurant concept by the acclaimed Copenhagen-based restaurant Noma, led by chef René Redzepi.";

    heroImg.src = image;

    pageContent.appendChild(hero);
    hero.appendChild(heroTitle);
    hero.appendChild(heroImg);
}