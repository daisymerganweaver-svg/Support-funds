const steps = Array.from(document.querySelectorAll(".step"));
const nextButtons = document.querySelectorAll(".next-btn");
const progressBar = document.getElementById("progressBar");
const whatsappBtn = document.getElementById("whatsappBtn");

let currentStep = 0;

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle("active", i === index);
  });

  const progress = ((index + 1) / steps.length) * 100;
  progressBar.style.width = `${progress}%`;
}

nextButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
    }
  });
});

whatsappBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const phone = "254783952185";
  const message =
    "Hello Pioneer Support Funds,%0A%0A" +
    "I have completed the application form.%0A" +
    "Please review my details and guide me on the next step.";

  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
});

showStep(currentStep);
