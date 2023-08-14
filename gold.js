document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("reservation-form");
  
  form.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const name = document.getElementById("name").value;
      const checkin = document.getElementById("checkin").value;
      const checkout = document.getElementById("checkout").value;
      
      // Here you can add further logic to process the reservation data,
      // like sending it to a server or performing validation.
      
      alert(`Reservation details:\nName: ${name}\nCheck-in: ${checkin}\nCheck-out: ${checkout}`);
      
      form.reset();
  });
});
