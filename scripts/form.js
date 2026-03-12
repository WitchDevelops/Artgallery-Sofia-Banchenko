const form = document.querySelector("#contact-form");
const statusEl = document.querySelector("#contact-status");
const fieldLabel = document.querySelectorAll(".form-label");
const emailInput = form.email;
const messageInput = form.message;
const emailError = document.querySelector("#email-error");
const messageError = document.querySelector("#message-error");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const clearFieldErrors = () => {
  emailError.textContent = "";
  messageError.textContent = "";
  emailInput.classList.remove("input-error");
  messageInput.classList.remove("input-error");
  fieldLabel.forEach((label) => {
    label.classList.remove("label-error");
  });
};

const setFieldError = (input, errorEl, message) => {
  input.classList.add("input-error");
  errorEl.textContent = message;
  fieldLabel.forEach((label) => {
    if (label.htmlFor === input.id) {
      label.classList.add("label-error");
    }
  });
};

const clearInputError = (input, errorEl) => {
  input.classList.remove("input-error");
  errorEl.textContent = "";
  fieldLabel.forEach((label) => {
    if (label.htmlFor === input.id) {
      label.classList.remove("label-error");
    }
  });
};

emailInput.addEventListener("input", () => {
  clearInputError(emailInput, emailError);
});

messageInput.addEventListener("input", () => {
  clearInputError(messageInput, messageError);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  clearFieldErrors();

  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  const errors = [];

  if (!email || !emailRegex.test(email)) {
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
    errors[0].focus();
    return;
  }

  // TODO: wire this to an email backend (EmailJS, FormSubmit, your own API)
  statusEl.textContent = "Your message was sent! Thank you.";

  form.reset();
});
