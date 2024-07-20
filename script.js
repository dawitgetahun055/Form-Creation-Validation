addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let isValid = true;
    let message = [];

    if (username.length < 3) {
      isValid = false;
      message.push("Username must be atleast 3 characters long.");
    }

    if (!(email.includes("@") && email.includes("."))) {
      isValid = false;
      message.push('Email must include both "@" and "." characters.');
    }

    if (password.length < 8) {
      feedbackDiv.style.display = "block";
      isValid = false;
    }

    if (isValid) {
      feedbackDiv.textContent = "Registration Successfull!";
      feedbackDiv.style.color = "#28a745";
    } else {
      feedbackDiv.innerHTML = message.join("<br>");
      feedbackDiv.style.color = "#dc3545";
    }
  });
});
