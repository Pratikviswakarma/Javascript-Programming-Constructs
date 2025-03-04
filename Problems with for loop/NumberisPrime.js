function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

const n3 = parseInt(process.argv[2]); // Read input number
console.log(`${n3} is ${isPrime(n3) ? "a Prime" : "not a Prime"} number`);
