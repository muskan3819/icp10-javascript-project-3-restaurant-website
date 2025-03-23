document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');

    // Sample validation: replace this with real validation or an API call
    if (username === "admin" && password === "123") {
        window.location.href = "index.html";  // Redirect to another page on successful login
    } else {
        errorMessage.textContent = "Invalid username or password.";
    }
});
