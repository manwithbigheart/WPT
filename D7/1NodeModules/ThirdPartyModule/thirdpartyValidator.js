import validator from 'validator';
import chalk from 'chalk';
// Example usage of validator functions

console.log(chalk.bold.blue('demo purpose!'));

let MyEmail1 = "abdulreheman34@gmail.com";
let MyEmail2 = "abc@";

console.log(validator.isEmail(MyEmail1));
console.log(validator.isEmail(MyEmail2));
