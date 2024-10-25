export default function createButton(btnText) {
    const button = document.createElement("button");
    button.classList.add("book-btn");
    button.textContent = btnText;

    return button;
}