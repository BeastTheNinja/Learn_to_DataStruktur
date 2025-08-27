// write cool JS hwere!!
const userSelect = document.getElementById("userSelect");
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const colorInput = document.getElementById("colorInput");
const saveButton = document.getElementById("saveButton");

// Event listener: vis data for valgt bruger
function userSelectChange() {
    const selectedUser = userSelect.value;
    console.log('change user to: ' + selectedUser);

    // TODO: Hent data fra localStorage og vis i formularen
    let users = JSON.parse(localStorage.getItem("users")) || {};

    // hvis brugeren ikke findes endnu, lav tomt objekt
    if (!users[selectedUser]) {
        users[selectedUser] = { name: "", age: "", color: "" };
        localStorage.setItem("users", JSON.stringify(users));
    }

    const userData = users[selectedUser];
    nameInput.value = userData.name || "";
    ageInput.value = userData.age || "";
    colorInput.value = userData.color || "";
};

// Event listener: gem data fra formularen
saveButton.addEventListener("click", () => {
    console.log("save data");

    const selectedUser = userSelect.value;
    const name = nameInput.value;
    const age = ageInput.value;
    const color = colorInput.value;

    // TODO: Gem data i localStorage for den valgte bruger
    let users = JSON.parse(localStorage.getItem("users")) || {};
    users[selectedUser] = { name, age, color };
    localStorage.setItem("users", JSON.stringify(users));
});

// Vis data for første bruger ved load
window.onload = userSelectChange;
userSelect.addEventListener("change", userSelectChange);

// --- change background color on save -----
saveButton.addEventListener("click", () => {
    document.body.style.backgroundColor = colorInput.value;
});
