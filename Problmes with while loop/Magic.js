const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findMagicNumber() {
    let low = 1, high = 100;

    console.log("Think of a number between 1 and 100...");

    function askQuestion() {
        if (low === high) {
            console.log(`Your magic number is: ${low}`);
            rl.close();
            return;
        }

        let mid = Math.floor((low + high) / 2);
        rl.question(`Is your number greater than ${mid}? (yes/no): `, (answer) => {
            if (answer.toLowerCase() === "yes") {
                low = mid + 1;
            } else {
                high = mid;
            }
            askQuestion();
        });
    }

    askQuestion();
}

findMagicNumber();
