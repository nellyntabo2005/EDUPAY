function handleRegistration(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }
  
    // Simulate successful registration
    alert("Registration successful! Welcome to EDUPAY.");
  
    // Clear the form
    document.getElementById("registerForm").reset();
  }
  