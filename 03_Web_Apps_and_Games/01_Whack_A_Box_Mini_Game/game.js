const playBox = document.getElementById("play_box");
const spawnBtn = document.getElementById("spawn-btn");
const clearBtn = document.getElementById("clear-btn");
const scoreDisplay = document.getElementById("score");

let score = 0;

spawnBtn.addEventListener("click", spawnenemy);
setInterval(spawnenemy, 500);

clearBtn.addEventListener("click", function () {
  const enemies = document.querySelectorAll(".enemy");

  enemies.forEach(function (enemy) {
    enemy.remove();
    score = 0;
    scoreDisplay.textContent = `Score:0`;
  });
});
function spawnenemy() {
  const enemy = document.createElement("div");

  enemy.classList.add("enemy");

  enemy.addEventListener("click", function () {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;

    enemy.remove();
  });
  const enemySize = 40;

  const randomX = Math.random() * (playBox.clientWidth - enemySize);

  const randomY = Math.random() * (playBox.clientHeight - enemySize);

  enemy.style.left = `${randomX}px`;
  enemy.style.top = `${randomY}px`;

  playBox.appendChild(enemy);
}
