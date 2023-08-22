const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulEl = document.querySelector('#ingredients')
const products = ingredients.map((ingredient) => {
  const liEl = document.createElement('li');
  liEl.classList.add('item');
  liEl.textContent = ingredient;
  liEl.style.listStyle = "none";
  return liEl
})

ulEl.append(...products);