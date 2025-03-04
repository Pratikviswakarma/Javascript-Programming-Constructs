function isPalindrome(num) {
    let strNum = num.toString();
    let reversedNum = strNum.split("").reverse().join("");
    return strNum === reversedNum;
}

const num1 = 121;
const num2 = 123;

console.log(`${num1} is ${isPalindrome(num1) ? "" : "not "}a palindrome`);
console.log(`${num2} is ${isPalindrome(num2) ? "" : "not "}a palindrome`);
