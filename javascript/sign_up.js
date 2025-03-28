function validateForm() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let errorMessage = document.getElementById("error-message");


    // Check if passwords match
    if (password !== confirmPassword) {
        errorMessage.textContent = alert("Passwords do not match!");
        return false;
    }

    // Validate email format
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = alert("Please enter a valid email address.");
        return false;
    }

    // Additional checks can be added here

    // If all validations pass, form submission will proceed
    alert("Registration successful!");
    return  true;
    window.location.href ="./index.html";
}