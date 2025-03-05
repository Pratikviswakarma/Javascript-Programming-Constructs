function validateEmail(email) {
    const regex = /^abc@[a-zA-Z0-9]+(\.[a-zA-Z]{2,})+$/;
    return regex.test(email);
}

// Test cases
console.log(validateEmail("abc@bridgelabz.co.in")); 
console.log(validateEmail("abc@bridgelabz.co"));    
console.log(validateEmail("abc@xyz.com"));          
console.log(validateEmail("xyz@bridgelabz.co.in")); 
console.log(validateEmail("abc@.co.in"));           
console.log(validateEmail("abc@bridgelabz"));       
