const arg = process.argv[2];
const number = Number(arg);

if (!isNaN(number) && arg.trim() !== '') {
  console.log(`My number: ${parseInt(number)}`);
} else {
  console.log('Not a number');
}
