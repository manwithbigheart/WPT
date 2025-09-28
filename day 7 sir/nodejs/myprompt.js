import prompt from "prompt";
import chalk from "chalk";

prompt.start();

let error = chalk.bold.underline.italic.red;
let success = chalk.bold.underline.italic.green;

prompt.get(["username", "password"], function (err, result) {
  if (result.username === "admin" && result.password === "admin@123") {
    console.log(success("Login Successfully"));
  } else {
    console.log(error("Wrong Credentials Inserted"));
  }
});
