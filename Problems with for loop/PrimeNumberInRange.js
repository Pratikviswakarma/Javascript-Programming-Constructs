function printPrimesInRange(start, end) {
    for (let num = start; num <= end; num++) {
        if (isPrime(num)) {
            console.log(num);
        }
    }
}

const startRange = parseInt(process.argv[2]);
const endRange = parseInt(process.argv[3]);
printPrimesInRange(startRange, endRange);
