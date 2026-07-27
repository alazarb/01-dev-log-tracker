// Day 14 - Objects

let developer = {
    name: "Alazar",
    age: 22,
    country: "Ethiopia",
    skills: ["HTML", "CSS", "JavaScript"]
};

console.log("Name:", developer.name);

console.log("Country:", developer.country);

developer.age = 23;

developer.job = "Full-Stack Student";

console.log(developer);

console.log("Skills:");

for (let i = 0; i < developer.skills.length; i++) {
    console.log(developer.skills[i]);
}

console.log("Developer Information:");

for (let key in developer) {
    console.log(key + ": " + developer[key]);
}