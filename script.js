const form = document.getElementById("form");
const errorMsg = document.getElementById("error-msg");
const email = document.getElementById("email");
const submitBtn = document.getElementById("submit-btn");
const errorImg = document.getElementById("error");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let isValid = email.checkValidity() & (email.value !== "");
  errorMsg.textContent = isValid ? "" : "Please provide a valid email";
  errorImg.style.visibility = isValid ? "hidden" : "visible";
  email.style.borderColor = isValid
    ? "rgba(206, 151, 151, 0.6)"
    : "hsl(0, 93%, 68%)";
  email.value = "";
});

email.addEventListener("keydown", function () {
  errorMsg.textContent = "";
  errorImg.style.visibility = "hidden";
  email.style.borderColor = "rgba(206, 151, 151, 0.6)";
});

document.addEventListener(
  "invalid",
  (function () {
    return function (e) {
      e.preventDefault();
    };
  })(),
  true
);
