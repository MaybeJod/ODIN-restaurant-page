import imgChef from "../assets/images/chef.webp";
import imgPlate from "../assets/images/plate.webp";
import imgPoster from "../assets/images/poster.webp";

import createButton from "./button";

const pageContent = document.querySelector("#content");

export default function backgroundSection() {
    const section = document.createElement("section");
    const sectionHeader = document.createElement("div");
    const sectionTitle = document.createElement("p");
    const sectionSubtitle = document.createElement("p");
    const sectionContentContainer = document.createElement("div");

    const sectionContent = document.createElement("div");
    const sectionContentText = document.createElement("p");

    const sectionImgs = document.createElement("div");
    const sectionImage1 = document.createElement("img");
    const sectionImage2 = document.createElement("img");
    const sectionImage3 = document.createElement("img");

    const sectionButton = createButton("Book Table");

    section.id = "backgroundSection";
    sectionHeader.classList.add("backgroundSection-header");
    sectionTitle.classList.add("backgroundSection-title");
    sectionSubtitle.classList.add("backgroundSection-subtitle");
    sectionContentContainer.classList.add("backgroundSection-content-container");
    
    sectionContent.classList.add("backgroundSection-content");
    sectionContentText.classList.add("backgroundSection-content-text");

    sectionImgs.classList.add("background-imgs")

    sectionTitle.textContent = "Background";
    sectionSubtitle.textContent =
        "noma kyoto goes beyond just food, aiming to create a fully immersive experience";
    sectionContentText.textContent =
        "Noma's relationship with Kyoto began in 2009 when Redzepi was invited by renowned Japanese chef Murata-san. This experience sparked a deep appreciation for Japanese culinary traditions, leading to various trips and collaborations over the years. In 2015, Noma hosted its first pop-up in Tokyo, which further solidified its connection to Japan. The Noma Kyoto concept blends Nordic culinary innovation with Japanese traditions and ingredients. This fusion creates a unique dining experience that showcases - Seasonal Japanese ingredients - Nordic cooking techniques and philosophy - Local Kyoto food culture";
    sectionImage1.src = imgPoster;
    sectionImage2.src = imgChef;
    sectionImage3.src = imgPlate;

    pageContent.appendChild(section);
    section.appendChild(sectionHeader);
    section.appendChild(sectionContentContainer);
    sectionHeader.appendChild(sectionTitle);
    sectionHeader.appendChild(sectionSubtitle);
    sectionContentContainer.appendChild(sectionContent);
    sectionContent.appendChild(sectionContentText);

    sectionContentContainer.appendChild(sectionImgs);
    sectionImgs.appendChild(sectionImage1);
    sectionImgs.appendChild(sectionImage2);
    sectionImgs.appendChild(sectionImage3);

    sectionContent.appendChild(sectionButton);
}