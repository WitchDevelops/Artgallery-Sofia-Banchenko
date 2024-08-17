const sendEmail = () => {
  let form = document.getElementById("contact-mail"); //get the form element and store it in a "form" variable
  let submitted = document.createElement("p"); //create a new paragraph and store it in a "submitted" variable
  submitted.innerText = "Your message was send! Thank you."; // create some text
  document.form.appendChild(submitted); //add it to the end of the form
};
