// Get references to the necessary HTML elements
const addToCartButtons = document.querySelectorAll('.restaurant-card button');
const cartItemsContainer = document.querySelector('.cart');
const cartTotalElement = document.querySelector('.cart-total');

// Initialize the cart items and total
let cartItems = [];
let cartTotal = 0;

// Add event listeners to the "Add to Cart" buttons
addToCartButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const restaurantCard = button.parentNode;
    const itemName = restaurantCard.querySelector('h2').textContent;
    const itemPrice = parseInt(restaurantCard.querySelector('.item-price').textContent.slice(1));

    // Create a new cart item object
    const cartItem = {
      name: itemName,
      price: itemPrice,
    };

    // Add the cart item to the cart items array
    cartItems.push(cartItem);

    // Update the cart display
    updateCartDisplay();

    // Disable the "Add to Cart" button
    button.disabled = true;
  });
});

// Function to update the cart display
function updateCartDisplay() {
  // Clear the cart items container
  cartItemsContainer.innerHTML = '';

  // Loop through the cart items and create the HTML elements
  cartItems.forEach((item, index) => {
    const cartItemElement = document.createElement('div');
    cartItemElement.className = 'cart-item';

    const itemNameElement = document.createElement('span');
    itemNameElement.className = 'item-name';
    itemNameElement.textContent = item.name;

    const itemPriceElement = document.createElement('span');
    itemPriceElement.className = 'item-price';
    itemPriceElement.textContent = `$${item.price}`;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      // Remove the cart item from the array
      cartItems.splice(index, 1);

      // Update the cart display
      updateCartDisplay();

      // Enable the corresponding "Add to Cart" button
      addToCartButtons[index].disabled = false;
    });

    // Append the elements to the cart item container
    cartItemElement.appendChild(itemNameElement);
    cartItemElement.appendChild(itemPriceElement);
    cartItemElement.appendChild(removeButton);

    // Append the cart item container to the cart items container
    cartItemsContainer.appendChild(cartItemElement);
  });

  // Calculate the total price
  cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  // Update the cart total element
  cartTotalElement.textContent = `Total: $${cartTotal}`;
}

  // Get a reference to the checkout button
  const checkoutBtn = document.getElementById('checkout-btn');

  // Add an event listener to the checkout button
  checkoutBtn.addEventListener('click', handleCheckout);

  // Function to handle the checkout process
  function handleCheckout() {
    // Get the payment details entered by the user
    const cardNumber = document.getElementById('card-number').value;
    const cardName = document.getElementById('card-name').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    // Perform validation on the payment details
    // ...

    // Call the payment gateway API with the payment details
    // ...

    // Handle the payment response from the payment gateway
    // ...

    // Redirect the user to the payment success page or display an error message
    // ...
  }

