//  var prompt = require('prompt');
 import chalk from 'chalk';
 import prompt from 'prompt'

  //
  // Start the prompt
  //
  prompt.start();

  //
  // Get two properties from the user: username and email
  //
  prompt.get(['username', 'password'], function (err, result) {
    //
    // Log the results.
    //
    console.log('Command-line input received:');
    console.log('  username: ' + result.username);
    console.log('  password: ' + result.password);

    if (result.username == "admin" && result.password == "admin@123") {
      console.log(chalk.bold.green('Login Success!'));
    }
    else {
      console.log(chalk.bold.red('Login Failed!'));
    }
  });