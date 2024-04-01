#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Initialize user balance and pin code
let myBALANCE = 10000;
let myPIN = 786786;
// Print Wellcome Message
console.log(chalk.blue("\n \tWellcome to Code with Abdul Quddus ATM-Machine\n"));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.yellow("Enter your pin code"),
    },
]);
if (pinAnswer.pin === myPIN) {
    console.log(chalk.green("\nPin is Correct, Login Successfuly!\n"));
    console.log(`Current Account Balance is ${myBALANCE}`);
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation:-",
            choices: ["Withdraw Ammount", "Check Balance"],
        },
    ]);
    if (operationAnswer.operation === "Withdraw Ammount") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "WithdrawMethod",
                type: "list",
                message: "Select a Withdraw method",
                choices: ["Fast Cash", "Enter Amount"],
            },
        ]);
        if (withdrawAns.WithdrawMethod === "Fast Cash") {
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "Select Amount:",
                    choices: [1000, 2000, 5000, 10000, 20000, 50000],
                },
            ]);
            if (fastCashAns.fastCash > myBALANCE) {
                console.log(chalk.red("Insufficient Balance"));
            }
            else {
                myBALANCE -= fastCashAns.fastCash;
                console.log(`${fastCashAns.fastCash} Withdraw Successfully`);
                console.log(`Your Remaining Balance is:${myBALANCE}`);
            }
        }
        else if (withdrawAns.WithdrawMethod === "Enter Amount") {
            let ammountAnswer = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter your amount to withdraw:",
                },
            ]);
            if (ammountAnswer.amount > myBALANCE) {
                console.log(chalk.red("Insufficient Balance"));
            }
            else {
                myBALANCE -= ammountAnswer.amount;
                console.log(`${ammountAnswer.amount} Withdraw Successfully`);
                console.log(`Your Remaining Balance is: ${myBALANCE}`);
            }
        }
    }
    else if (operationAnswer.operation === "Check Balance") {
        console.log(`Your Account Balance is: ${myBALANCE}`);
    }
}
else {
    console.log(chalk.red("Pin is Incorrect, Try Again!"));
}
console.log(chalk.italic("-:The End:-"));
