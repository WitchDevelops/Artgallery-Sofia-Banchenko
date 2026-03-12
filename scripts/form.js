const form = document.querySelector("#contact-form");
const statusEl = document.querySelector("#contact-status");
const submitButton = form.querySelector('input[type="submit"]');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const getLabel = (input) => {
  return document.querySelector(`label[for="${input.id}"]`);
};

const setFieldError = (input, errorEl, message) => {
  input.classList.add("input-error");
  input.classList.remove("input-success");
  errorEl.textContent = message;
  getLabel(input)?.classList.add("label-error");
};

const clearInputError = (input, errorEl) => {
  input.classList.remove("input-error");
  input.classList.remove("input-success");
  errorEl.textContent = "";
  getLabel(input)?.classList.remove("label-error");
};

const setInputSuccess = (input) => {
  input.classList.add("input-success");

  const label = getLabel(input);
  if (label) {
    label.classList.remove("label-error");
  }
};

const setSendingState = () => {
  submitButton.disabled = true;
  submitButton.value = "Sending...";
  statusEl.textContent = "Sending your message...";
};

const clearSendingState = () => {
  submitButton.disabled = false;
  submitButton.value = "Send";
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

fields.forEach(({ input, error, validate }) => {
  input.addEventListener("input", () => {
    const value = input.value.trim();
    const errorMessage = validate(value);

    if (errorMessage) {
      clearInputError(input, error);
    } else {
      clearInputError(input, error);
      setInputSuccess(input);
    }
  });
});

// TODO: wire this to an email backend (EmailJS, FormSubmit, your own API)
form.addEventListener("submit", async (event) => {
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

  setSendingState();

  try {
    // simulate request (replace later with fetch / EmailJS)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    statusEl.textContent = "Your message was sent! Thank you.";
    form.reset();
    form.remove();
  } catch (error) {
    statusEl.textContent = "Something went wrong. Please try again.";
  } finally {
    clearSendingState();
  }
});
