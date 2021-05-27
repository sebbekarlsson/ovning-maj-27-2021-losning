const form = document.querySelector("form");
const button = form.querySelector("button");
const errorDiv = form.querySelector("#error");

const checkFirstName = value => value.length >= 2;

const checkEmail = value => value.length >= 6 && value.includes("@");

const checkPassword = value => value.length >= 4;

function showErrors(infos) {
    infos.forEach(info => {
        const errorElement = document
        .getElementById(info.inputField.name + '-error') // <div class="error">
        

        if (info.ok) {
            errorElement.removeAttribute("data-active");
            errorElement.innerText = "";
        } else {
            errorElement.setAttribute("data-active", 1);
            errorElement.innerText = "not valid";
        }
    });
}

button.addEventListener("click", event => {
    event.preventDefault();

    showErrors(Array.from(form.querySelectorAll("input")).map(inputField => {
        switch(inputField.name) {
            case "firstname": return { inputField, ok: checkFirstName(inputField.value) }; break;
            case "email": return { inputField, ok: checkEmail(inputField.value) }; break;
            case "password": return { inputField, ok: checkPassword(inputField.value) }; break;
            default: return null;
        }
    }).filter(info => !!info && info.inputField));
});