let dayNum = parseInt(prompt("Enter Week Day (1-7):"), 10);

// Check if dayNum is a valid number between 1 and 7
if (isNaN(dayNum) || dayNum < 1 || dayNum > 7) {
  console.log("Invalid input! Please enter a number between 1 and 7.");
} else {
  switch (dayNum) {
    case 1:
      console.log("Sunday");
      break;
    case 2:
      console.log("Monday");
      break;
    case 3:
      console.log("Tuesday");
      break;
    case 4:
      console.log("Wednesday");
      break;
    case 5:
      console.log("Thursday"); // Fixed spelling
      break;
    case 6:
      console.log("Friday");
      break;
    case 7:
      console.log("Saturday"); // Fixed spelling
      break;
  }
}
