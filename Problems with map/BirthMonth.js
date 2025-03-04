function generateBirthMonths() {
    let birthMonthMap = new Map();

    for (let i = 1; i <= 50; i++) {
        let month = Math.floor(Math.random() * 12) + 1; // Random month (1-12)
        if (!birthMonthMap.has(month)) {
            birthMonthMap.set(month, []);
        }
        birthMonthMap.get(month).push(`Person ${i}`);
    }

    console.log("Individuals grouped by birth month:");
    for (let [month, people] of birthMonthMap) {
        console.log(`Month ${month}: ${people.join(", ")}`);
    }
}

generateBirthMonths();
