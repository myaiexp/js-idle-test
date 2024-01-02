let totalPoints = 0;
let upgrades = [
    { id: 1, cost: 10, pointsPerSecond: 1, purchased: false },
    { id: 2, cost: 50, pointsPerSecond: 5, purchased: false },
    { id: 3, cost: 100, pointsPerSecond: 10, purchased: false },
    // Add more upgrades as desired...
];

function generatePoints() {
    let pointsToAdd = upgrades.reduce((sum, upgrade) => {
        return sum + (upgrade.purchased ? upgrade.pointsPerSecond : 0);
    }, 0);
    totalPoints += pointsToAdd;
    document.getElementById('points_display').innerText = `Points: ${totalPoints}`;
}

setInterval(generatePoints, 1000);

function purchaseUpgrade(upgradeId) {
    let upgrade = upgrades.find(u => u.id === upgradeId);
    if (upgrade && totalPoints >= upgrade.cost && !upgrade.purchased) {
        totalPoints -= upgrade.cost;
        upgrade.purchased = true;
        document.getElementById(`upgrade_${upgradeId}`).disabled = true;
        updateDisplay();
    } else {
        console.log("Cannot purchase upgrade.");
    }
}

function updateDisplay() {
    document.getElementById('points_display').innerText = `Points: ${totalPoints}`;
    upgrades.forEach(upgrade => {
        let upgradeButton = document.getElementById(`upgrade_${upgrade.id}`);
        if (upgradeButton) {
            upgradeButton.innerText = `Upgrade ${upgrade.id} - Cost: ${upgrade.cost}`;
            upgradeButton.disabled = upgrade.purchased;
        }
    });
}

// Initial display setup
document.addEventListener('DOMContentLoaded', () => {
    let upgradesContainer = document.getElementById('upgrades_container');
    upgrades.forEach(upgrade => {
        let button = document.createElement('button');
        button.id = `upgrade_${upgrade.id}`;
        button.innerText = `Upgrade ${upgrade.id} - Cost: ${upgrade.cost}`;
        button.onclick = () => purchaseUpgrade(upgrade.id);
        upgradesContainer.appendChild(button);
    });
    updateDisplay();
});
