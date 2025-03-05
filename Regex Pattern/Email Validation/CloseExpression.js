function validateEmail(email) {
    const regex = /^abc([._+,-][a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2})?$/;
    return regex.test(email);
}

// Test cases
console.log(validateEmail("abc@bridgelabz.co"));       
console.log(validateEmail("abc.xyz@bridgelabz.co.in")); 
console.log(validateEmail("abc-xyz@bridgelabz.co.us")); 
console.log(validateEmail("abc+xyz@bridgelabz.co.uk")); 
console.log(validateEmail("abc,xyz@bridgelabz.co.au")); 
console.log(validateEmail("abc_123@bridgelabz.co.nz")); 
console.log(validateEmail("abcxyz@bridgelabz.co"));     
console.log(validateEmail("abc.xyz@bridgelabz.co"));    
console.log(validateEmail("abc@bridgelabz.com"));      
 
console.log(validateEmail("abc@bridgelabz.co.inn"));    
console.log(validateEmail("abc.@bridgelabz.co.in"));   
console.log(validateEmail("abc#xyz@bridgelabz.co.in"));
console.log(validateEmail("xyz@bridgelabz.co.in"));     
console.log(validateEmail("abc-@bridgelabz.co.in"));    
console.log(validateEmail("abc.xyz@bridgelabz.co.123"));

