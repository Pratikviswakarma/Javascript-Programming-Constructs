function gamblerGame() {
    let money = 100, bets = 0, wins = 0;

    while (money > 0 && money < 200) {
        bets++;
        let betResult = Math.random() < 0.5 ? "win" : "lose";

        if (betResult === "win") {
            money++;
            wins++;
        } else {
            money--;
        }

        console.log(`Bet: ${bets}, Money: ₹${money}, Wins: ${wins}`);
    }

    console.log(`Game over! Total bets: ${bets}, Total wins: ${wins}`);
}

gamblerGame();
