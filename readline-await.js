import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(q) {
  return new Promise(resolve => rl.question(q, resolve));
}

async function main() {
  const name = await ask("Name: ");
  const age = await ask("Age: ");

  // 👉 output in between
  console.log(`Hello ${name}, you are ${age}`);

  // 👉 more input after output
  const hobby = await ask("Hobby: ");
  console.log(`Nice, you like ${hobby}`);

  rl.close();
}

main();