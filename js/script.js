// ================================
// Day 15 - DOM Introduction
// ================================

// Select elements

let title = document.getElementById("title");
let about = document.getElementById("about-text");
let day = document.getElementById("current-day");
let footer = document.getElementById("footer-text");

// Change text

title.textContent = "My Developer Journal";

about.textContent =
    "I am learning Full-Stack Web Development and improving my skills every day.";

// Update progress

day.textContent = "Day 18 of 60";

// Change styles

title.style.color = "blue";
title.style.fontSize = "42px";

day.style.color = "green";
day.style.fontWeight = "bold";

footer.style.color = "gray";

// Console message

console.log("Developer Journal updated successfully!");

// ================================
// Change Day Button
// ================================

let button = document.getElementById("change-day-btn");

button.addEventListener("click", function () {

    day.textContent = "Keep Going! 🚀";

});

// ================================
// Change Title Color Button
// ================================

let themeButton = document.getElementById("theme-btn");

themeButton.addEventListener("click", function () {

    title.style.color = "purple";

});

// ================================
// Contact Form
// ================================

let form = document.getElementById("contact-form");

let output = document.getElementById("output");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    let userName = document.getElementById("name").value;

    let userEmail = document.getElementById("email").value;

    let userMessage = document.getElementById("message").value;

    if (
        userName === "" ||
        userEmail === "" ||
        userMessage === ""
    ) {

        output.textContent = "Please fill in all fields.";

    } else {

        // Create an object
        let user = {
            name: userName,
            email: userEmail,
            message: userMessage
        };

        // Save it to Local Storage
        localStorage.setItem(
            "user",
            JSON.stringify(user)
        );

        output.textContent =
            "Thank you, " +
            userName +
            "! We will contact you at: " +
            userEmail;

    }

});

// ================================
// Load Saved User
// ================================

let savedUser = localStorage.getItem("user");

if (savedUser !== null) {

    savedUser = JSON.parse(savedUser);

    document.getElementById("name").value =
        savedUser.name;

    document.getElementById("email").value =
        savedUser.email;

    document.getElementById("message").value =
        savedUser.message;

}
setTimeout(function () {

    console.log("Welcome back!");

}, 3000);
setInterval(function () {

    console.log("I am learning JavaScript!");

}, 2000);
let clock = document.getElementById("clock");

setInterval(function () {

    let now = new Date();

    clock.textContent = "Time: " + now.toLocaleTimeString();

}, 1000);