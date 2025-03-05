function validatePinCode(pin) {
    const pinCodePattern = /^[1-9][0-9]{2}\s?[0-9]{3}$/;
    return pinCodePattern.test(pin);
}

// Test Cases
console.log(validatePinCode("400088"));  
console.log(validatePinCode("400 088")); 
console.log(validatePinCode("560001"));  
console.log(validatePinCode("110 045")); 
console.log(validatePinCode("001234"));  
console.log(validatePinCode("A400088")); 
console.log(validatePinCode("400088B")); 
console.log(validatePinCode("400088#")); 
console.log(validatePinCode("400 08B")); 
console.log(validatePinCode("400 08"));  
console.log(validatePinCode("400 088 "));
console.log(validatePinCode("4000887")); 
