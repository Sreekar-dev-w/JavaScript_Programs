const prev = document.getElementById("prev");
const next = document.getElementById("next");

const slider = document.getElementById("slider");

let pr = 0;
const img = ["img1.png", "img2.jpg", "img3.jpg"];

next.addEventListener("click", function () {
  if (pr < img.length - 1) {
    pr++;

    slider.src = img[pr];
  }
});
prev.addEventListener("click", function () {
  if (pr > 0) {
    pr--;
  }     
  slider.src = img[pr];
});
