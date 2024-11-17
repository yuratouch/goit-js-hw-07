const formElement = document.querySelector('.login-form');

formElement.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.target,
    { email, password } = form.elements;

  if (email.value && password.value) {
    const formValues = {
      [email.name]: email.value.trim(),
      [password.name]: password.value.trim(),
    };

    console.log(formValues);
    form.reset();
  } else {
    alert('All form fields must be filled in');
  }
});
