const BASE_URL = "https://jsonplaceholder.typicode.com/users";

// load data
async function loadData() {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error(`API returned ${response.status}`);
  }
  const data = await response.json();
  return data;
}

// show status
const loadingEl = document.getElementById("loading");
const successEl = document.getElementById("success");
const errorEl = document.getElementById("error");

function showStatus(status) {
  loadingEl.classList.remove("active");
  successEl.classList.remove("active");
  errorEl.classList.remove("active");

  if (status === "loading") loadingEl.classList.add("active");
  if (status === "success") successEl.classList.add("active");
  if (status === "error") errorEl.classList.add("active");
}

// render dashboard
async function renderDashboard() {
  try {
    showStatus("loading");

    const users = await loadData();

    const container = document.getElementById("content");

    container.innerHTML = users
      .map((user) => {
        return `
    <div class="card">
      <h2>${user.name}</h2>
      <p>${user.email}</p>
      <p>${user.address.city}</p>
    </div>
  `;
      })
      .join("");

    showStatus("success");
  } catch (err) {
    console.log(err);
    showStatus("error");
  }
}

renderDashboard();
