import inquirer from "inquirer";

interface anstype{
    userId: string,
    userPin: number,
    accountType: string,
    amount: number,
}
let balance = 100000;
const answers: anstype = await inquirer.prompt(
    [
        {
            name: "userId",
            type: "input",
            message: "Enter your ID"
        },
        {
            name: "userPin",
            type: "number",
            message: "Enter your pin"
        },
        {
            name: "accountType",
            type: "list",
            message: "Select your Account Type",
            choices: ["current" , "balance"]
        },
        {
            name: "transectionType",
            type: "list",
            message: "Select your Transection type",
            choices: ["fastCash" , "widhdrawl"],
            when(answers){
                return answers.accountType === "current"
            }
        },
        {
            name: "amount",
            type: "list",
            message: "Select your amount",
            choices: ["1000" , "2000" , "5000" , "10000"],
            when(answers){
                return answers.transectionType === "fastCash"
            }
        },
        {
            name: "amount",
            type: "number",
            message: "Enter your amount",
            when(answers){
                return answers.transectionType === "widhdrawl"
            }
        },
    ]
);

if(answers.userId && answers.userPin){
    const balance = Math.floor(Math.random() - 100000);
    console.log("Current balance:" , balance);
    
    const enterAmount = answers.amount;
    if(balance >= enterAmount){
        console.log("Insufficent Balance");
    }else{
        const remaining = balance - enterAmount;
        console.log("Your remaining balance is" , remaining)
    }
}
