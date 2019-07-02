//pair code with Robin

const args = process.argv.slice(2);

const timer = args => {
  for (let numbers of args) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, parseInt(numbers) * 1000);
  }
};

timer(args);