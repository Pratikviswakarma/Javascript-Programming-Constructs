function validatePinCode(pin) {
    const pinCodePattern = /^[1-9][0-9]{5}$/;
    return pinCodePattern.test(pin);
}

// Test Cases
console.log(validatePinCode("560001"));  
console.log(validatePinCode("110045"));  
console.log(validatePinCode("001234"));  
console.log(validatePinCode("A400088"));
console.log(validatePinCode("9876543"));
console.log(validatePinCode("40008B")); 
console.log(validatePinCode("1234@#")); 
