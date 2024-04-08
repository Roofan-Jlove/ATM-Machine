import inquirer from "inquirer";
let myBalance = 10000; //  Dollers
let MyPin = 5787;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter you pin",
        type: "number",
    }
]);
//       
if (pinAnswer.pin === MyPin) {
    console.log("correct code");
    let operationAns = await inquirer.prompt([
        {
            name: "AccountType",
            message: "please select Account",
            type: "list",
            choices: ["Current Account", "Saving Account"]
        },
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "fast cash", "check balance"],
            when(answer) {
                return answer.AccountType === "Current Account";
            }
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your Amount",
                type: "number"
            }
        ]);
        //  =, -=, +=   (-=) to use
        myBalance -= operationAns.amount;
        console.log("Your remaining balance is:" + myBalance);
    }
    else if (operationAns.operation === "check balance")
        console.log("Yoour current balance is:" + myBalance);
}
else {
    console.log("Incorreect pin code");
}
