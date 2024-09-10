// script.js

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please fill in all fields!");
    } else {
        alert("Logged in successfully!");
        // Here you can add further logic to handle login
    }
});
