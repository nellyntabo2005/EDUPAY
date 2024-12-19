function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting normally
  
    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Simulate form submission (you can integrate this with a server)
    alert();
  
    // Clear the form
    document.getElementById("contactForm").reset();
  }