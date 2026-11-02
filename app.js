

let addBtn = document.querySelector("#addTask");
let task = document.querySelector("#task");
let userTasks = document.querySelector("#list");
let editTarget = null;

addBtn.addEventListener("click", () => {
    let todo = task.value.trim();

    if (todo === "") {
        alert("Please write something");
        return;
    }

    if (addBtn.innerHTML === "Add task") {
        userTasks.innerHTML += `
            <div class="main">
                <li>${todo}</li>
                <div>
                    <button onclick="edit(event)" class="editBtn">Edit</button>
                    <button onclick="dlt(event)">Delete</button>
                </div>
            </div>`;
    } 
    else if (addBtn.innerHTML === "Save" && editTarget) {
        editTarget.innerHTML = todo;
        addBtn.innerHTML = "Add task";
        editTarget = null;
    }

    task.value = "";
});

const edit = (event) => {
    editTarget = event.target.parentNode.parentNode.children[0];
    task.value = editTarget.innerHTML;
    addBtn.innerHTML = "Save";
};

const dlt = (event) => {
    let main = event.target.parentNode.parentNode;

    if (editTarget && main.contains(editTarget)) {
        task.value = "";
        addBtn.innerHTML = "Add task";
        editTarget = null;
    }

    main.remove();
};

