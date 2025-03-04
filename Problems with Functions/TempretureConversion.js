const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function celsiusToFahrenheit(degC) {
    return (degC * 9 / 5) + 32;
}

function fahrenheitToCelsius(degF) {
    return (degF - 32) * 5 / 9;
}

function temperatureConversion() {
    rl.question("Enter 1 for Celsius to Fahrenheit or 2 for Fahrenheit to Celsius: ", (choice) => {
        if (choice === "1") {
            rl.question("Enter temperature in Celsius (0 - 100): ", (degC) => {
                degC = parseFloat(degC);
                if (degC >= 0 && degC <= 100) {
                    console.log(`Temperature in Fahrenheit: ${celsiusToFahrenheit(degC).toFixed(2)}°F`);
                } else {
                    console.log("Invalid input! Temperature should be between 0°C and 100°C.");
                }
                rl.close();
            });
        } else if (choice === "2") {
            rl.question("Enter temperature in Fahrenheit (32 - 212): ", (degF) => {
                degF = parseFloat(degF);
                if (degF >= 32 && degF <= 212) {
                    console.log(`Temperature in Celsius: ${fahrenheitToCelsius(degF).toFixed(2)}°C`);
                } else {
                    console.log("Invalid input! Temperature should be between 32°F and 212°F.");
                }
                rl.close();
            });
        } else {
            console.log("Invalid selection. Please enter 1 or 2.");
            rl.close();
        }
    });
}

temperatureConversion();
