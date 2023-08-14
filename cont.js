document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");
  
  form.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;
      
      // Here you can add further logic to process the contact form data,
      // like sending it to a server or performing validation.
      
      alert(`Thank you for your message!\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);
      
      form.reset();
  });
});
