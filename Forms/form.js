email.style.border = "";
password.style.border = "";

const form = document.getElementById("loginForm");

const email = document.getElementById("email");
const password = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (email.value === "") {
    emailError.textContent = "Email Required";
    email.style.border = "2px solid red";
  }

  if (password.value === "") {
    passwordError.textContent = "Password Required";
    email.style.border = "2px solid red";
  }

  if (!email.value.includes("@")) {
    emailError.textContent = "Invalid Email";
    email.style.border = "2px solid red";
  }

  if (password.value.length < 8) {
    passwordError.textContent = "Password too short";
    email.style.border = "2px solid red";
  }
  if (password.value.length == 0) {
    passwordError.textContent = "Enter a Valid Password";
    email.style.border = "2px solid red";
  }
});
password.addEventListener("input", (e) => {
  passwordError.textContent = "";
  password.style.border = "";
});
email.addEventListener("input", (e) => {
  emailError.textContent = "";
  email.style.border = "";
});
