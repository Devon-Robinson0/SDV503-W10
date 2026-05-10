const data = [
  ["TEXT", 10],
  ["LONGERTEXT", 25],
  ["MID", 7]
];

const colWidth = 15; // adjust this

for (const [text, num] of data) {
  console.log(text.padEnd(colWidth) + num);
}