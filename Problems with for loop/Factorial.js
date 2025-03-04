function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    console.log(`${n}! = ${fact}`);
}

const n5 = parseInt(process.argv[2]);
factorial(n5);
