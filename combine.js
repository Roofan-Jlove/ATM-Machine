// Import necessary modules
import inquirer from 'inquirer';
// Initialize an array to store account balances
const accountBalances = {
    '1234': 1000, // Example: Account number 1234 with a balance of $1000
    '5678': 2000, // Example: Account number 5678 with a balance of $2000
};
// Main function to simulate the ATM
async function main() {
    try {
        const { accountNumber } = await inquirer.prompt({
            type: 'input',
            name: 'accountNumber',
            message: 'Enter your account number:',
        });
        if (accountBalances[accountNumber]) {
            const { action } = await inquirer.prompt({
                type: 'list',
                name: 'action',
                message: 'Choose an action:',
                choices: ['Check Balance', 'Withdraw', 'Deposit', 'Exit'],
            });
            switch (action) {
                case 'Check Balance':
                    console.log(`Your balance: $${accountBalances[accountNumber]}`);
                    break;
                case 'Withdraw':
                    const { withdrawAmount } = await inquirer.prompt({
                        type: 'input',
                        name: 'withdrawAmount',
                        message: 'Enter the amount to withdraw:',
                    });
                    accountBalances[accountNumber] -= parseFloat(withdrawAmount);
                    console.log(`Withdrawn $${withdrawAmount}. New balance: $${accountBalances[accountNumber]}`);
                    break;
                case 'Deposit':
                    const { depositAmount } = await inquirer.prompt({
                        type: 'input',
                        name: 'depositAmount',
                        message: 'Enter the amount to deposit:',
                    });
                    accountBalances[accountNumber] += parseFloat(depositAmount);
                    console.log(`Deposited $${depositAmount}. New balance: $${accountBalances[accountNumber]}`);
                    break;
                case 'Exit':
                    console.log('Thank you for using our ATM. Have a great day!');
                    break;
            }
        }
        else {
            console.log('Invalid account number. Please try again.');
        }
    }
    catch (error) {
        console.error('An error occurred:');
    }
}
// // Run the ATM simulation
main();
