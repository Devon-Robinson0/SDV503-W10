// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("What is your name? ", (name) => {
//   rl.question("How old are you? ", (age) => {
//     console.log(`Hello ${name}, you are ${age}`);
//     rl.close();
//   });
// });

const data = [
  ["TEXT", 10],
  ["LONGERTEXT", 25],
  ["MID", 7]
];

const colWidth = 15; // adjust this

for (const [text, num] of data) {
  console.log(text.padEnd(colWidth) + num);
}