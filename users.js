import loadData from "./load.js";
import showStatus from "./showState.js";


const BASE_URL = "https://jsonplaceholder.typicode.com/users"


// render users
export default async function users() {
  try {
    showStatus("users", "loading", "Loading users...");

    const data = await loadData(BASE_URL);

    const container = document.querySelector("#users .content");

    container.innerHTML = data.slice(0, 5)
      .map((user) => {
        return `
    <div class="card">
      <h4>${user.name}</h4>
      <p>${user.email}</p>
      <p>${user.address.city}</p>
    </div>
  `;
      })
      .join("");

    showStatus("users", "success", "Users loaded");

  } catch (err) {
    console.log("Error", err);
    showStatus("users", "error", "Failed to load users");
  }
}


