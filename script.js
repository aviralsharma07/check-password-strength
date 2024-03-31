var password = document.getElementById("password");
var message = document.getElementById("message");
var strength = document.getElementById("strength");

password.addEventListener("input", function () {
  if (password.value.length > 0) {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }

  if (password.value.length < 4) {
    strength.innerHTML = "Weak";
    strength.style.color = "red";
  } else if (password.value.length >= 4 && password.value.length < 8) {
    strength.innerHTML = "Medium";
    strength.style.color = "orange";
  } else {
    strength.innerHTML = "Strong";
    strength.style.color = "green";
  }
});
