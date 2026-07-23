// Day 10 - JavaScript Conditional Statements

let userName = prompt("What is your name?");
let age = Number(prompt("How old are you?"));

if (age >= 18) {
    alert("Welcome " + userName + "! You are an adult.");
} else {
    alert("Sorry " + userName + ". You are under 18.");
}

console.log("User Name:", userName);
console.log("Age:", age);