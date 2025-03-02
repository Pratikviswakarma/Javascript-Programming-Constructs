let val = parseInt(prompt("Enter a number for display unit"), 10);

if (val === 1) {
    console.log("One");
} else if (val === 10) {
    console.log("Ten");
} else if (val === 100) {
    console.log("Hundred");
} else if (val === 1000) {
    console.log("Thousand");
} else if (val === 10000) {
    console.log("Ten Thousand");
} else if (val === 100000) {
    console.log("Lakh");
} else if (val === 1000000) {
    console.log("Million");
} else {
    console.log("Invalid input! Please enter a valid unit number.");
}

