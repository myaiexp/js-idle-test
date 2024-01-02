let totalPoints = 0;
let pointsPerSecond = 1;
let upgradeCost = 10;

function generatePoints() {
    totalPoints += pointsPerSecond;
    document.getElementById('points_display').innerText = `Points: ${totalPoints}`;
}

// Call generatePoints every second
setInterval(generatePoints, 1000);

function upgradePG() {
    if (totalPoints >= upgradeCost) {
        totalPoints -= upgradeCost;
        pointsPerSecond *= 1.2; // For example, increase the points per second by 20%
        upgradeCost *= 1.5; // Increase the upgrade cost by 50%
        document.getElementById('points_display').innerText = `Points: ${totalPoints}`;
    } else {
        console.log("Not enough points to upgrade!");
    }
}
