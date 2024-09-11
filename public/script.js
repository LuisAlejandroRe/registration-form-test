document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    let isValid = true;

    // Validación del nombre
    if (!name) {
      document.getElementById("nameError").textContent = "Name is required.";
      document.getElementById("nameError").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("nameError").style.display = "none";
    }

    // Validación del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      document.getElementById("emailError").textContent = "Email is required.";
      document.getElementById("emailError").style.display = "block";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent =
        "Invalid email format.";
      document.getElementById("emailError").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("emailError").style.display = "none";
    }

    // Validación de la contraseña
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
    if (!password) {
      document.getElementById("passwordError").textContent =
        "Password is required.";
      document.getElementById("passwordError").style.display = "block";
      isValid = false;
    } else if (!passwordRegex.test(password)) {
      document.getElementById("passwordError").textContent =
        "Password must be at least 8 characters and include uppercase, lowercase, number, and symbol.";
      document.getElementById("passwordError").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("passwordError").style.display = "none";
    }

    // Validación de la confirmación de la contraseña
    if (confirmPassword !== password) {
      document.getElementById("confirmPasswordError").textContent =
        "Passwords do not match.";
      document.getElementById("confirmPasswordError").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("confirmPasswordError").style.display = "none";
    }

    // Si todas las validaciones pasan
    if (isValid) {
      window.location.href = "dashboard.html";
    }
  });
