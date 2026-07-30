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

day.textContent = "Day 15 of 60";

// Change styles

title.style.color = "blue";
title.style.fontSize = "42px";

day.style.color = "green";
day.style.fontWeight = "bold";

footer.style.color = "gray";

// Console message

console.log("Developer Journal updated successfully!");
// Button

let button = document.getElementById("change-day-btn");

// Event

button.addEventListener("click", function () {

    day.textContent = "Keep Going! 🚀";

});
let themeButton = document.getElementById("theme-btn");

themeButton.addEventListener("click", function () {
    title.style.color = "purple";
});
let form = document.getElementById("contact-form");

let output = document.getElementById("output");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    let userName = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    if (
        userName === "" ||
        email === ""
    ) {

        output.textContent = "Please fill all fields.";

    } else {

        output.textContent =
            "Thank you, " +
            userName +
            "! We will contact you at: " +
            email;

    }

});