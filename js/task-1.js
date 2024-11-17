const categoryListItems = document.querySelectorAll('li.item');
console.log('Number of categories:', categoryListItems.length);

categoryListItems.forEach(item => {
  console.log('Category:', item.querySelector('h2').textContent);
  console.log('Elements:', item.querySelectorAll('ul li').length);
});
