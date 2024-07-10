const taskInput = document.getElementById("taskInput");
const button = document.getElementById("taskBtn");
const taskList = document.getElementById("toDoTask");
const master = document.getElementById("checkMaster");
const clearAllBtn = document.getElementById("clearAllBtn");

button.addEventListener("click", () => {
    master.style.display = "block";
    const inputValue = taskInput.value;

    if (inputValue !== "") {
        const listItem = document.createElement("li");
        listItem.classList.add("todoClass");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const span = document.createElement("span");
        span.textContent = inputValue;

        const deleteIcon = document.createElement("i");
        deleteIcon.classList.add("fa", "fa-trash");
        deleteIcon.addEventListener("click", () => {
            listItem.remove();
        });

        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                span.style.textDecoration = 'line-through';
            } else {
                span.style.textDecoration = 'none';
            }
        });

        listItem.appendChild(checkbox);
        listItem.appendChild(span);
        listItem.appendChild(deleteIcon);
        taskList.appendChild(listItem);

        taskInput.value = "";
    } else {
        alert("Please add your task first!");
        master.style.display = "none";
    }
});

clearAllBtn.addEventListener("click", () => {
    taskList.innerHTML = "";
});
 
