import createButton from "../components/button.js";
import createForm from "../components/form.js";
import fieldsetTextInput from "../components/textInput.js";

const pageContent = document.querySelector("#content");

export default function bookTablePage() {
    document.title = "Book Table @ noma";

    const form = createForm("Book Table");
    const contentContainer = document.createElement("div");
    const fieldsetName = fieldsetTextInput("Name");
    const fieldsetEmail = fieldsetTextInput("Email");
    const pickerContainer = document.createElement("div");
    const fieldsetDate = document.createElement("fieldset");
    const fieldsetNoOfGuests = document.createElement("fieldset");
    const labelDate = document.createElement("label");
    const inputDate = document.createElement("input");
    const labelNoOfGuests = document.createElement("label");
    const inputNoOfGuests = document.createElement("input");
    const datalistNoOfGuests = document.createElement("datalist");
    const button = createButton("Book Table");

    contentContainer.classList.add("form-content");
    pickerContainer.classList.add("picker-container");
    labelDate.textContent = "Date";
    labelDate.setAttribute("for", "date");
    inputDate.setAttribute("type", "date");
    inputDate.setAttribute("id", "date");
    labelNoOfGuests.textContent = "Guests";
    labelNoOfGuests.setAttribute("for", "no-of-guests");
    inputNoOfGuests.setAttribute("list", "no-of-guests-list");
    inputNoOfGuests.setAttribute("type", "number");
    inputNoOfGuests.setAttribute("min", "1");
    inputNoOfGuests.setAttribute("max", "6");
    inputNoOfGuests.setAttribute = ("id", "no-of-guests");
    datalistNoOfGuests.id = "no-of-guests-list";


    for (let i = 0; i < 10; i++) {
        const option = document.createElement("option");
        option.value = i + 1;
        datalistNoOfGuests.appendChild(option);
    }

    pageContent.appendChild(form);
    form.appendChild(contentContainer);
    contentContainer.appendChild(fieldsetName);
    contentContainer.appendChild(fieldsetEmail);
    contentContainer.appendChild(pickerContainer);
    contentContainer.appendChild(button);
    pickerContainer.appendChild(fieldsetDate);
    pickerContainer.appendChild(fieldsetNoOfGuests);
    fieldsetDate.appendChild(labelDate);
    fieldsetDate.appendChild(inputDate);
    fieldsetNoOfGuests.appendChild(labelNoOfGuests);
    fieldsetNoOfGuests.appendChild(inputNoOfGuests);
    fieldsetNoOfGuests.appendChild(datalistNoOfGuests);

    button.addEventListener("click", (event) => {
        event.preventDefault();
        
        confirmReservation();
    });
}

function confirmReservation() {
    const formContent = document.querySelector(".form-content");

    formContent.innerHTML = `<p>Thank you for making a reservation <3 noma@Kyoto!</p>`;
}