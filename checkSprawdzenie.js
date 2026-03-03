function checkSprawdzenie(taskId) {
    const task = document.getElementById(taskId);
    const options = task.querySelector(".options");

    if (options.style.display === "none") {
        options.style.display = "block";
    } else {
        options.style.display = "none";
    }
}