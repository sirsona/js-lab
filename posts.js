
import loadData from "./load.js";
import showStatus from "./showState.js";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

// render posts
export default async function posts() {
    try {
        showStatus("posts", "loading", "Loading posts...");

        const data = await loadData(BASE_URL);

        const container = document.querySelector("#posts .content");

        container.innerHTML = data.slice(0, 5)
            .map((post) => {
                return `
                        <div class="card">
                        <h4>${post.title}</h4>
                        <p>${post.body}</p>

                        </div >
                    `;
            })
            .join("");


        showStatus("posts", "success", "Posts loaded");
    } catch (err) {
        console.log(err);
        showStatus("posts", "error", "Failed to load posts");
    }
}

