const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');
 
let totalPrice = 0;
let shoppingList = [];
let item = [];
 
// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
  //render()
}
 
addProductButton.addEventListener("click",(event) => {
    const item = {
        name: productNameInput.value,
        price: Number(productPriceInput.value),
    }
    shoppingList.push(item);
    updateTotalPrice(item.price);
    render();
  console.log(event.target)
});

function renderShoppingList () {
    shoppingList.innerHTML = "";
    shoppingList.forEach(function(shoppingList){
        const li = document.createElement("li");
        let button = document.createElement("button");
        button.textContent = "Remove Item"
        li.textContent = `${shoppingList.name} + ${shoppingList.price}`
    });
}


// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}

