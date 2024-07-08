let cakeCount = 0;
let autoClickerCount = 0;
let doubleClickActive = false;

function bakeCake() {
    let increment = doubleClickActive ? 2 : 1;
    cakeCount += increment;
    document.getElementById('cakeCount').innerText = cakeCount;
}

function buyUpgrade(upgrade) {
    if (upgrade === 'autoClicker' && cakeCount >= 10) {
        cakeCount -= 10;
        autoClickerCount++;
        document.getElementById('cakeCount').innerText = cakeCount;
        setInterval(bakeCake, 1000);
    } else if (upgrade === 'doubleClick' && cakeCount >= 50) {
        cakeCount -= 50;
        doubleClickActive = true;
        document.getElementById('cakeCount').innerText = cakeCount;
    }
}

// Optionally add a leaderboard
const leaderboard = [];

function updateLeaderboard(name, score) {
    leaderboard.push({ name, score });
    leaderboard.sort((a, b) => b.score - a.score);
    // Display leaderboard
}
