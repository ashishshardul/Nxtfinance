document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form submission

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Thank you for contacting us! We'll get back to you soon.");
        // Here you can add logic to send form data to your server
        document.getElementById("contact-form").reset();
    } else {
        alert("Please fill in all fields.");
    }
});