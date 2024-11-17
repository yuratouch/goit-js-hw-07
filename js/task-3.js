const inputElement = document.querySelector('#name-input'),
  outputElement = document.querySelector('#name-output');

inputElement.addEventListener('input', event => {
  const trimmedValue = event.target.value.trim();
  outputElement.textContent = trimmedValue ? trimmedValue : 'Anonymous';
});
