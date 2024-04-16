const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields!");
    event.preventDefault(); // Prevent form submission
  }
});
