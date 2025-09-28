import chalk from 'chalk';
import validator from 'validator';

let msg1= "Welcome You All In YCP AIT CDAC Mumbai";
console.log(chalk.bold.red(msg1));

let friend1='Manav',friend2='Vaibhav',friend3='Rohit';
console.log(chalk.bold.yellow(friend1),chalk.italic.blue(friend2),chalk.underline.green(friend3));

// how to create variable to store chalk propert 
let error =chalk.bold.red.underline;
let success =chalk.bold.underline.green;
console.log(error('you did somthing wrong'));
console.log(success('you done it'));

// use of validators 
let mydata = "";
let mydata1 = "Hello Friends";
console.log(validator.isEmpty(mydata));
console.log(validator.isEmpty(mydata1));

let myEmail = "abc@gmail.com";
let myEmail2 = "abc@";
console.log(validator.isEmail(myEmail));
console.log(validator.isEmail(myEmail2));