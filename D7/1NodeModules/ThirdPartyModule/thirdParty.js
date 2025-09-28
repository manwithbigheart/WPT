
import chalk from 'chalk';

console.log(chalk.bold.green('Hello from ThirdPartyModule!'));
console.log(chalk.bold.red('to check variuos colour!'));
console.log(chalk.bold.blue('demo purpose!'));


// Example usage of different chalk styles using variables

let error = chalk.bold.red;
let warning = chalk.bold.yellow;
let notice = chalk.bold.blue;
// You can use these above variables to style your messages

console.log(error('This is an error message!'));
console.log(warning('This is a warning message!'));
console.log(notice('This is a notice message!'));

// You can add more styles and colors as needed
console.log(chalk.italic.green('This is an italic green message!'));
console.log(chalk.underline.magenta('This is an underlined magenta message!'));
console.log(chalk.strikethrough.cyan('This is a strikethrough cyan message!'));

// Background colors
console.log(chalk.bgYellow.black('This is a message with yellow background and black text!'));
console.log(chalk.bgBlue.white('This is a message with blue background and white text!'));