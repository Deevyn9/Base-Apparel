// const errorText = document.getElementsByClassName("error-text");
// const showValid = document.getElementsByClassName("valid");

// form.addEventListener("submit", (e) => {
//
// });

function validation() {
  const form = document.getElementById("form");
  const validText = document.getElementById("valid-text");
  const email = document.getElementById("email").value;
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern) && email === " ") {
    form.classList.add("valid");
    form.classList.remove("invalid");
    validText.innerHTML = "Valid Email";
    e.preventDefault();
  } else {
    form.classList.add("invalid");
    form.classList.remove("valid");
    validText.innerHTML = "Please provide a valid Email";
  }
}
