let contador = 0;
checkboxInput.id = `checkbox_${++contador}`;

const containerCheckbox = document.createElement("div");
containerCheckbox.classList.add("container", "checkbox");

const checkboxInput = document.createElement("input");
checkboxInput.type = "checkbox";
checkboxInput.classList.add("input", "fintcheckbox");

const checkboxLabel = document.createElement("label");
checkboxLabel.appendChild(checkboxInput);
containerCheckbox.appendChild(checkboxLabel);

document.querySelector("#mainListContainer").appendChild(containerCheckbox);