// const BASE_URL = "https://jsonplaceholder.typicode.com/users";

const url = "https://api.exchangerate-api.com/v4/latest/KES";

async function loadData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}
//
// task 2
async function loadDataSafe() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API returned ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to load data", error);
    return null;
  }
}

// task3
//

const statusEl = document.getElementById("status");
const contentEl = document.getElementById("content");

async function render() {
  statusEl.textContent = "Loading....";
  try {
    const data = await loadDataSafe();
    statusEl.innerHTML = "";
    contentEl.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
  } catch (err) {
    statusEl.textContent = `Error: ${err.message}`;
  }
}

render();
