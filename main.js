const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let editSpan = document.createElement("span");
        editSpan.innerHTML = "✏️";
        editSpan.className = "edit-span";
        editSpan.addEventListener('click', editTask);
        li.appendChild(editSpan);

        let deleteSpan = document.createElement("span");
        deleteSpan.innerHTML = "\u00d7";
        deleteSpan.className = "delete-span";
        deleteSpan.addEventListener('click', deleteTask);
        li.appendChild(deleteSpan);
    }

    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) { if (e.target.tagName === "LI") { e.target.classList.toggle("checked"); saveData(); } }, false);

function editTask(event) {
    const li = event.target.parentElement;
    const newValue = prompt("Edit your task:", li.childNodes[0].nodeValue);
    if (newValue !== null) {
        li.childNodes[0].nodeValue = newValue;
    }
    saveData();
}

function deleteTask(event) {
    event.target.parentElement.remove();
    saveData();
}

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || '';
}

showTask();
