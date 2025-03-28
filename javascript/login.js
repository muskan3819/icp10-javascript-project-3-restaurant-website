document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Sample validation: replace this with real validation or an API call
    if (username === "admin" && password === "123") {
        alert("Form submitted successfully");
         window.location.href = "./../index.html";   // Redirect to another page on successful login
    } else {
        alert("please fill in both filds .");
        errorMessage.textContent = " Invalid username and password.";
    }
});
