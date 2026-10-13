console.log("validate.js is running"); 
// JNEC Events Hub - Registration Validation

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("regForm");

    // Do nothing on pages without the registration form
    if (!form) {
        return;
    }

    form.addEventListener("submit", function (event) {

        let isValid = true;

        // Get field values
        const fullname = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const eventId = document.getElementById("event_id").value;
        const idCard = document.getElementById("id_card").files[0];

        // Clear previous errors
        document.querySelectorAll(".error").forEach(function (span) {
            span.textContent = "";
        });

        document.getElementById("formMessage").textContent = "";
        document.getElementById("formMessage").className = "";

        // Validate full name
        if (fullname === "") {
            document.getElementById("fullnameError").textContent =
                "Please enter your full name.";
            isValid = false;
        } else if (fullname.length < 2) {
            document.getElementById("fullnameError").textContent =
                "Name must contain at least 2 characters.";
            isValid = false;
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
            document.getElementById("emailError").textContent =
                "Please enter your email address.";
            isValid = false;
        } else if (!emailPattern.test(email)) {
            document.getElementById("emailError").textContent =
                "Please enter a valid email address.";
            isValid = false;
        }

        // Validate phone
        const phoneDigits = phone.replace(/\D/g, "");

        if (phone === "") {
            document.getElementById("phoneError").textContent =
                "Please enter your phone number.";
            isValid = false;
        } else if (phoneDigits.length < 7 || phoneDigits.length > 15) {
            document.getElementById("phoneError").textContent =
                "Enter a phone number containing 7 to 15 digits.";
            isValid = false;
        }

        // Validate event selection
        if (eventId === "") {
            document.getElementById("eventError").textContent =
                "Please select an event.";
            isValid = false;
        }

        // Validate optional ID card upload
        if (idCard && !idCard.type.startsWith("image/")) {
            document.getElementById("idCardError").textContent =
                "Please upload an image file.";
            isValid = false;
        }

        // Stop submission if validation fails
        if (!isValid) {
            event.preventDefault();

            document.getElementById("formMessage").textContent =
                "Please correct the errors above.";
            document.getElementById("formMessage").className =
                "alert alert-danger mt-3";

            return;
        }

        // This is a front-end practical, not a connected registration server.
        event.preventDefault();

        document.getElementById("formMessage").textContent =
            "Validation successful! Your form is ready for submission.";
        document.getElementById("formMessage").className =
            "alert alert-success mt-3";

        console.log("Registration form passed validation.");
    });

    // Clear error messages when the form is reset
    form.addEventListener("reset", function () {
        setTimeout(function () {
            document.querySelectorAll(".error").forEach(function (span) {
                span.textContent = "";
            });

            const formMessage = document.getElementById("formMessage");
            formMessage.textContent = "";
            formMessage.className = "";
        }, 0);
    });

});