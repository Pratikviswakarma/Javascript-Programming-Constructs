let val = parseInt(prompt("Enter a number for display unit"), 10);

switch(val){
    case 1:
    console.log("One");
    break;
    case 10:
    console.log("Ten");
    break;
    case 100:
    console.log("Hundred");
    break;
    case 1000:
    console.log("Thousand");
    break;
    case 10000:
    console.log("Ten Thousand");
    break;
    case 100000: 
    console.log("Lakh");
    break;
    default :
    console.log("Invalid input! Please enter a valid unit number.");
}