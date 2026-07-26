// Day 13 - Arrays

let skills = ["HTML", "CSS", "JavaScript"];

console.log("First Skill:", skills[0]);

console.log("Total Skills:", skills.length);

skills.push("Git");
skills.push("GitHub");

console.log("After Push:", skills);

skills.pop();

console.log("After Pop:", skills);

skills.unshift("Linux");

console.log("After Unshift:", skills);

skills.shift();

console.log("After Shift:", skills);

console.log("All Skills:");

for (let i = 0; i < skills.length; i++) {
    console.log(skills[i]);
}