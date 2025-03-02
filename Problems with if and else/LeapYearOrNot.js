// Get the command-line argument
const args = process.argv.slice(2);

if (args.length !== 1) {
    console.log("Usage: node leapYearCheck.js <year>");
    process.exit(1);
}

const year = parseInt(args[0], 10);

// Check if it's a valid 4-digit year
if (isNaN(year) || year < 1000 || year > 9999) {
    console.log("Please enter a valid 4-digit year.");
    process.exit(1);
}

// Leap year logic
const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

console.log(isLeapYear ? "Leap Year" : "Not a Leap Year");
