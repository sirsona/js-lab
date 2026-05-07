
// show status

export default function showStatus(widgetName, state, message = "") {
    const widget = document.getElementById(widgetName);

    if (!widget) {
        console.error(`Widget not found: ${widgetName}`);
        return;
    }

    const loading = widget.querySelector(".loading");
    const success = widget.querySelector(".success");
    const error = widget.querySelector(".error");

    loading?.classList.remove("active");
    success?.classList.remove("active");
    error?.classList.remove("active");

    if (state === "loading") loading?.classList.add("active");
    if (state === "success") success?.classList.add("active");
    if (state === "error") error?.classList.add("active");
}
