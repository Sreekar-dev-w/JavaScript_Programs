const db = document.getElementById("db");
const ib = document.getElementById("ib");
const rb = document.getElementById("rb");
let count = 0;
ib.onclick = function () {
  count++;
  countlabel.textContent = count;
};
db.onclick = function () {
  count--;
  countlabel.textContent = count;
};
rb.onclick = function () {
  count = 0;
  countlabel.textContent = count;
};
