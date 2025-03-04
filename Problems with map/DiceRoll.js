function rollDie() {
    return Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
}

function diceGame() {
    let diceMap = new Map();
    let maxRolls = 10;
    let maxNumber = null;

    // Initialize map with dice numbers 1-6
    for (let i = 1; i <= 6; i++) {
        diceMap.set(i, 0);
    }

    while (true) {
        let roll = rollDie();
        diceMap.set(roll, diceMap.get(roll) + 1);

        if (diceMap.get(roll) === maxRolls) {
            maxNumber = roll;
            break;
        }
    }

    console.log("Dice Rolls:", Object.fromEntries(diceMap));

    // Find min and max occurrences
    let minNumber = [...diceMap.entries()].reduce((a, b) => (a[1] < b[1] ? a : b))[0];
    console.log(`Number that reached 10 times: ${maxNumber}`);
    console.log(`Number that appeared the least: ${minNumber}`);
}

diceGame();
