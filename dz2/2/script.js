const button = document.querySelector("button");
const container = document.querySelector(".container");
const input = document.querySelector(".textInput");
let todoCount = 0;

input.oninput = () => button.disabled = input.value === "" || !input.value;

const createCheckBox = (labelText) => {
    const div = document.createElement("div");
    container.append(div);

    let inputCheckBox = document.createElement("input");
    const checkBoxName = `checkBox${todoCount}`;
    inputCheckBox.id = checkBoxName;
    inputCheckBox.name = checkBoxName;
    inputCheckBox.type = "checkbox";

    div.append(inputCheckBox);

    let label = document.createElement("label");
    label.for = checkBoxName;
    label.textContent = labelText;
    div.append(label);

    inputCheckBox.onchange = () => label.style.textDecoration = inputCheckBox.checked ? "line-through" : "none";
}

button.addEventListener("click", () => {
    todoCount = todoCount + 1;
    createCheckBox(input.value);
    input.value = "";
    button.disabled = true;
});