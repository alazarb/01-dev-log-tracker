// Day 11 - JavaScript Loops

console.log("=== For Loop ===");

for (let i = 1; i <= 10; i++) {
    console.log("Day " + i);
}

console.log("----------------");

console.log("=== While Loop ===");

let count = 1;

while (count <= 5) {
    console.log("Count: " + count);
    count++;
}

console.log("----------------");

console.log("=== Countdown ===");

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("----------------");

console.log("=== Even Numbers ===");

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}