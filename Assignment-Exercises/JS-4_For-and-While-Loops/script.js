// scripts.js

// Example Using a for loop to print numbers 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(`Number: ${i}`);
}

// Using a while loop to print a list of hobbies
let hobbies = [
  "Reading",
  "Writing",
  "Gaming",
  "Traveling",
  "Cooking",
  "Drawing",
  "Photography",
  "Coding",
  "Dancing",
  "Singing",
];


let index = 0;
while (index < hobbies.length) {
  // Log each hobby and see if it works in the console
  index++;
  console.log(`Hobby ${index}: ${hobbies[index]}`)
}
