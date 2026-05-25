import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your name? ", (name) => {
  rl.question("How old are you? ", (age) => {
    console.log(`Hello ${name}, you are ${age}`);
    rl.close();
  });
});

rl.question("hello mate ", (input) => {
    console.log(input);
    
})