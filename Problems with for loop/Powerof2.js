function powerOfTwo(n) {
    for (let i = 0; i <= n; i++) {
        console.log(`2^${i} = ${Math.pow(2, i)}`);
    }
}

const n1 = parseInt(process.argv[2]); // Read n from command-line argument
powerOfTwo(n1);
