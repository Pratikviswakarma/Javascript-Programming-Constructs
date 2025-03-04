function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function getPalindrome(n) {
    return parseInt(n.toString().split("").reverse().join(""));
}

function checkPrimeAndPalindrome(num) {
    if (isPrime(num)) {
        console.log(`${num} is a prime number.`);
        let palindromeNum = getPalindrome(num);
        console.log(`Palindrome of ${num} is ${palindromeNum}`);
        if (isPrime(palindromeNum)) {
            console.log(`Palindrome ${palindromeNum} is also a prime number.`);
        } else {
            console.log(`Palindrome ${palindromeNum} is not a prime number.`);
        }
    } else {
        console.log(`${num} is not a prime number.`);
    }
}

const numToCheck = 13;
checkPrimeAndPalindrome(numToCheck);
