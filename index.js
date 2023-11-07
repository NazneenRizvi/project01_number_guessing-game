#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let genNum = Math.floor(Math.random() * 2);
let user = await inquirer.prompt({
    name: "numb1",
    type: "list",
    message: "Please Select the Number:",
    choices: ["o", "1"],
});
if (genNum == parseInt(user.numb1)) {
    console.log(chalk.bold.blueBright(" congratulations you won"));
}
else {
    console.log(chalk.bold.redBright("Sorry, Better Luck Next Time"));
}
