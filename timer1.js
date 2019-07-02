//pair code with Robin

const args = process.argv.slice(2);

const timer = args => {
  for (let numbers of args) {
    parseFloat(numbers) > 0 && parseFloat(numbers) ? setTimeout(() => {
      process.stdout.write('\x07');
    }, parseFloat(numbers) * 1000) : {};
  }
};


timer(args);