const cont = document.querySelector(".container");
const btn = document.getElementById("create-btn");
const boxes = document.querySelectorAll(".box");

boxes.forEach(function (box) {
  box.addEventListener("mouseover", function () {
    box.style.backgroundColor = "black";
  });
});
boxes.forEach(function (box) {
  box.addEventListener("click", function () {
    box.style.backgroundColor = "white";
  });
});
btn.addEventListener("click", function (e) {
  const nb = document.createElement("div");
  nb.classList.add("box");
  nb.addEventListener("mouseover", function () {
    nb.style.backgroundColor = "black";
  });
  nb.addEventListener("click", function () {
    nb.style.backgroundColor = "white";
  });
  cont.appendChild(nb);
});
