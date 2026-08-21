let score = 0;
let perClick = 1;
let autoCount = 0;

let clickUpgradeCost = 10;
let autoUpgradeCost = 25;

const scoreEl = document.getElementById("score");
const perClickEl = document.getElementById("perClick");
const autoCountEl = document.getElementById("autoCount");
const clickBtn = document.getElementById("clickBtn");
const clickUpgradeBtn = document.getElementById("clickUpgradeBtn");
const autoUpgradeBtn = document.getElementById("autoUpgradeBtn");
const resetBtn = document.getElementById("resetBtn");
const floatingText = document.getElementById("floatingText");

function updateUI() {
  scoreEl.textContent = score;
  perClickEl.textContent = perClick;
  autoCountEl.textContent = autoCount;

  clickUpgradeBtn.textContent = `Upgrade click (+1) — Cost: ${clickUpgradeCost}`;
  autoUpgradeBtn.textContent = `Buy auto clicker — Cost: ${autoUpgradeCost}`;

  clickUpgradeBtn.classList.toggle("affordable", score >= clickUpgradeCost);
  autoUpgradeBtn.classList.toggle("affordable", score >= autoUpgradeCost);
}

function showFloat(text, x, y) {
  floatingText.textContent = text;
  floatingText.style.left = x + "px";
  floatingText.style.top = y + "px";
  floatingText.classList.remove("show");
  void floatingText.offsetWidth;
  floatingText.classList.add("show");
}

clickBtn.addEventListener("click", (e) => {
  score += perClick;
  updateUI();
  showFloat(`+${perClick}`, e.clientX + 10, e.clientY - 10);
});

clickUpgradeBtn.addEventListener("click", () => {
  if (score >= clickUpgradeCost) {
    score -= clickUpgradeCost;
    perClick += 1;
    clickUpgradeCost = Math.floor(clickUpgradeCost * 1.6);
    updateUI();
  }
});

autoUpgradeBtn.addEventListener("click", () => {
  if (score >= autoUpgradeCost) {
    score -= autoUpgradeCost;
    autoCount += 1;
    autoUpgradeCost = Math.floor(autoUpgradeCost * 1.75);
    updateUI();
  }
});

resetBtn.addEventListener("click", () => {
  score = 0;
  perClick = 1;
  autoCount = 0;
  clickUpgradeCost = 10;
  autoUpgradeCost = 25;
  updateUI();
});

setInterval(() => {
  if (autoCount > 0) {
    score += autoCount;
    updateUI();
  }
}, 1000);

updateUI();
