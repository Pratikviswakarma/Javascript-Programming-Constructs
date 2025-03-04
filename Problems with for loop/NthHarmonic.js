function harmonicNumber(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += 1 / i;
    }
    console.log(`Harmonic number H(${n}) = ${sum.toFixed(6)}`);
}

const n2 = parseInt(process.argv[2]); // Read n from command-line argument
harmonicNumber(n2);
