const form = document.querySelector("#contact-form");
const statusEl = document.querySelector("#contact-status");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const getLabel = (input) => {
  return document.querySelector(`label[for="${input.id}"]`);
};

const setFieldError = (input, errorEl, message) => {
  input.classList.add("input-error");
  errorEl.textContent = message;
  getLabel(input)?.classList.add("label-error");
};

const clearInputError = (input, errorEl) => {
  input.classList.remove("input-error");
  errorEl.textContent = "";
  getLabel(input)?.classList.remove("label-error");
};

const fields = [
  {
    input: form.elements.email,
    error: document.querySelector("#email-error"),
    validate: (value) =>
      !value || !emailRegex.test(value)
        ? "Please enter a valid email address."
        : null,
  },
  {
    input: form.elements.message,
    error: document.querySelector("#message-error"),
    validate: (value) => (!value ? "Please enter a message." : null),
  },
];

const clearFieldErrors = () => {
  fields.forEach(({ input, error }) => clearInputError(input, error));
};

fields.forEach(({ input, error }) => {
  input.addEventListener("input", () => {
    clearInputError(input, error);
  });
});

// TODO: wire this to an email backend (EmailJS, FormSubmit, your own API)
form.addEventListener("submit", (event) => {
  event.preventDefault();
  clearFieldErrors();
  const errors = [];

  fields.forEach(({ input, error, validate }) => {
    const value = input.value.trim();
    const errorMessage = validate(value);
    if (errorMessage) {
      setFieldError(input, error, errorMessage);
      errors.push(input);
    }
  });

  if (errors.length > 0) {
    errors[0].focus();
    return;
  }

  statusEl.textContent = "Your message was sent! Thank you.";

  form.reset();
});
