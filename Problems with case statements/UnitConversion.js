// Function to perform unit conversion
function convertLength(option, value) {
    switch (option) {
        case 1:
            console.log(`${value} Feet = ${value * 12} Inches`);
            break;
        case 2:
            console.log(`${value} Feet = ${(value * 0.3048).toFixed(4)} Meters`);
            break;
        case 3:
            console.log(`${value} Inches = ${(value / 12).toFixed(4)} Feet`);
            break;
        case 4:
            console.log(`${value} Meters = ${(value * 3.2808).toFixed(4)} Feet`);
            break;
        default:
            console.log("Invalid option! Please enter a valid choice (1-4).");
    }
}

// Get user input
let option = parseInt(prompt("Choose Conversion:\n1. Feet to Inch\n2. Feet to Meter\n3. Inch to Feet\n4. Meter to Feet"), 10);
let value = parseFloat(prompt("Enter value to convert:"));

// Validate inputs
if (isNaN(option) || isNaN(value)) {
    console.log("Invalid input! Please enter numbers only.");
} else {
    convertLength(option, value);
}
