// import { createTaskManager } from './taskManager.js';

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");


const manager = createTaskManager()

// add task
addBtn.addEventListener("click", () => {
    const tasks = taskInput.value.trim()

    if (!tasks) return;


    taskList.innerHTML = "";

    manager.addTask(tasks)

    displayTasks()

    taskInput.value = ""
});


function displayTasks() {
    const tasks = manager.listTasks();

    taskList.innerHTML = "";

    tasks.forEach((t, index) => {
        const div = document.createElement("div");
        div.textContent = `${t.task} (${t.priority})`;

        taskList.appendChild(div);
    });
}