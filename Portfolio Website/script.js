// Dark/Light Mode Toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.innerHTML = document.body.classList.contains("dark")
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});

// Contact Form (demo)
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thanks! Your message was sent.");
});


const form = document.getElementById("contactForm");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      status.innerHTML = "✅ Message sent successfully!";
      form.reset();
    } else {
      status.innerHTML = "❌ Oops! Something went wrong. Try again.";
    }
  });