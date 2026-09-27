const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');

let shoppingList = [];

addProductButton.addEventListener('click', () => {
  const item = {
    name: productNameInput.value.trim(),
    price: Number(productPriceInput.value),
  };

  if (!item.name || isNaN(item.price)) return; // skip empty/invalid input

  shoppingList.push(item);
  render();

  productNameInput.value = '';
  productPriceInput.value = '';
});

function render() {
  renderShoppingList();
  renderTotal();
}

function renderShoppingList() {
  cart.innerHTML = ''; // clear the <ul>, not the array

  shoppingList.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)} `;

    const button = document.createElement('button');
    button.textContent = 'Remove Item';
    button.addEventListener('click', () => removeItem(index));

    li.append(button);  // put the button inside the li
    cart.append(li);    // put the li on the page
  });
}

function renderTotal() {
  const total = shoppingList.reduce((sum, item) => sum + item.price, 0);
  totalPriceSpan.textContent = total.toFixed(2);
}

function removeItem(index) {
  shoppingList.splice(index, 1); // remove from the data
  render();                      // redraw from the data
}