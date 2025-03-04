function powerOfTwo(n) {
    let i = 0;
    let power = 1; // 2^0 = 1

    while (i <= n && power <= 256) {
        console.log(`2^${i} = ${power}`);
        power *= 2; // Multiply by 2 each time
        i++;
    }
}

const n1 = parseInt(process.argv[2]);
powerOfTwo(n1);
