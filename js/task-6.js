const inputElement = document.querySelector('#controls input'),
  createButton = document.querySelector('[data-create]'),
  destroyButton = document.querySelector('[data-destroy]'),
  boxesContainer = document.querySelector('#boxes');

createButton.addEventListener('click', () => {
  const value = Number(inputElement.value);

  if (value >= 1 && value <= 100) {
    boxesContainer.innerHTML = createBoxes(value);
    inputElement.value = '';
  }
});

destroyButton.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function generateBoxMarkup(size, color) {
  return `<div style="background-color:${color}; width:${size}px; height:${size}px;"></div>`;
}

function createBoxes(amount) {
  let boxes = '',
    count = 0,
    boxSize = 30;

  do {
    boxes += generateBoxMarkup(boxSize, getRandomHexColor());
    boxSize += 10;
    count++;
  } while (count < amount);

  return boxes;
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
