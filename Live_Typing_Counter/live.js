const text = document.getElementById("text");
const count = document.getElementById("count");
const maxLength = 100;
text.addEventListener("input", function () {
  let tl = text.value.length;
  count.textContent = tl + " / " + maxLength;
  if (tl > 80) {
    count.style.color = "orange";
  }
  if (tl === 100) {
    count.style.color = "red";
  }
  text.value = text.value.substring(0, 100);
});
