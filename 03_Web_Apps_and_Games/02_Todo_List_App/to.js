const input = document.getElementById("taskInput");
const btn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

btn.addEventListener("click", function () {
  const li = document.createElement("li");
  list.appendChild(li);
  li.textContent = input.value;
  input.value = "";
  input.focus();
});
