if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

document.getElementById("darkModeBtn").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // optional: save preference
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
//dark mode