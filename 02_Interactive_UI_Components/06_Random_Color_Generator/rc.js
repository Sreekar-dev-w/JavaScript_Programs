const btn = document.getElementById("btn");
const colorName = document.getElementById("colorName");

btn.addEventListener("click", function () {
  const r = Math.floor(Math.random() * 256);

  const g = Math.floor(Math.random() * 256);

  const b = Math.floor(Math.random() * 256);

  const randomColor = `rgb(${r}, ${g}, ${b})`;

  document.body.style.backgroundColor = randomColor;

  colorName.textContent = randomColor;
});
