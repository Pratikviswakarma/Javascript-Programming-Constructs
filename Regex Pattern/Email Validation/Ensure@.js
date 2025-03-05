function validateEmail(email) {
    const regex = /^abc@bridgelabz(\.[a-zA-Z]{2,})+$/;
    return regex.test(email);
}

// Test cases
console.log(validateEmail("abc@bridgelabz.co.in")); 
console.log(validateEmail("abc@bridgelabz.co"));    
console.log(validateEmail("abc@bridgelabz.com"));   
console.log(validateEmail("abc@xyz.co.in"));        
console.log(validateEmail("xyz@bridgelabz.co.in")); 
console.log(validateEmail("abc@bridgelabz"));       
console.log(validateEmail("abc@.co.in"));           

