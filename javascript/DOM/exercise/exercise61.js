// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const list = document.querySelector('#list');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const productInput = form.elements.product;
  const quanityInput = form.elements.qty;

  addItem(productInput.value, quanityInput.value)
  productInput.value = '';
  quanityInput.value = '';
})

const addItem = (productInput, quanityInput) => {
  const newItem = document.createElement('li');

  list.appendChild(newItem);
  newItem.innerText = `${quanityInput} ${productInput}`;

}

