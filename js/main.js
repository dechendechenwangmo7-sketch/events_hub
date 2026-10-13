
// JNEC Events Hub - Main JavaScript

function greetHome() {
    console.log("main.js is running");

    const welcomeMsg = document.getElementById("welcomeMsg");

    if (welcomeMsg) {
        welcomeMsg.innerHTML =
            "Welcome to <strong>JNEC Events Hub</strong>!";
    }
}

// Run when the page loads
document.addEventListener("DOMContentLoaded", function () {
    greetHome();

    // Confirm before clearing the registration form
    const resetBtn = document.querySelector(
        "#regForm button[type='reset']"
    );

    if (resetBtn) {
        resetBtn.addEventListener("click", function (e) {
            if (!confirm("Clear the whole form?")) {
                e.preventDefault();
            }
        });
    }
});
