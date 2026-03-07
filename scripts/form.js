const form = document.querySelector("#contact-form");
const statusEl = document.querySelector("#contact-status");
const emailInput = form.email;
const messageInput = form.message;
const emailError = document.querySelector("#email-error");
const messageError = document.querySelector("#message-error");

const clearFieldErrors = () => {
  emailError.textContent = "";
  messageError.textContent = "";
  emailInput.classList.remove("input-error");
  messageInput.classList.remove("input-error");
};

const clearStatus = () => {
  statusEl.textContent = "";
};

const setFieldError = (input, errorEl, message) => {
  input.classList.add("input-error");
  errorEl.textContent = message;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  clearFieldErrors();
  clearStatus();

  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  const errors = [];

  if (!email) {
    setFieldError(
      emailInput,
      emailError,
      "Please enter a valid email address.",
    );
    errors.push(emailInput);
  }

  if (!message) {
    setFieldError(messageInput, messageError, "Please enter a message.");
    errors.push(messageInput);
  }

  if (errors.length > 0) {
    statusEl.textContent = "Please fix the errors above.";
    statusEl.style.color = "var(--contrast)";
    statusEl.style.textAlign = "left";
    errors[0].focus();
    return;
  }

  // TODO: wire this to an email backend (EmailJS, FormSubmit, your own API)
  statusEl.textContent = "Your message was sent! Thank you.";
  statusEl.style.color = "var(--contrast-d)";
  statusEl.style.textAlign = "center";

  form.reset();
});

emailInput.addEventListener("input", () => {
  emailInput.classList.remove("input-error");
  emailError.textContent = "";
  clearStatus();
});

messageInput.addEventListener("input", () => {
  messageInput.classList.remove("input-error");
  messageError.textContent = "";
  clearStatus();
});
