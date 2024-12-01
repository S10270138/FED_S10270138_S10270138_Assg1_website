// Form validation for the contact form
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function (event) {
      // Select the required fields
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      
      // Validate that all fields are filled out
      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        event.preventDefault(); // Prevent form submission if fields are empty
        alert("Please fill out all the required fields.");
        return;
      }
  
      // Optionally, check if the email is in the correct format
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailPattern.test(email.value)) {
        event.preventDefault(); // Prevent form submission if email is invalid
        alert("Please enter a valid email address.");
        return;
      }
    });
  });
  