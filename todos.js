import loadData from "./load.js";
import showStatus from "./showState.js";

const BASE_URL = "https://jsonplaceholder.typicode.com/todos"

export default async function todos() {

    try {

        showStatus("todos", "loading", "Loading todos...");

        const data = await loadData(BASE_URL)

        const container = document.querySelector("#todos .content");

        container.innerHTML = `
                <ol>
                ${data
                .slice(0, 5)
                .map(todo => `<li>${todo.title}</li>`)
                .join("")}
                 </ol>
                `;
        showStatus("todos", "success", "Todos loaded");

    }
    catch (err) {
        console.log("Error", err);
        showStatus("todos", "error", "Failed to load todos");
    }
}
