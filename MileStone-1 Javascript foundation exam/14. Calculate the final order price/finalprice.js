let cart = []; // Array to hold cart items

// Function to add product to cart
const addToCart = (productName, price) => {
    // Check if the product is already in cart
    const existingItem = cart.find(item => item.productName === productName);

    if (existingItem) {
        // If product already exists in cart, increase quantity and update total price
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
    } else {
        // Otherwise, add new item to cart
        cart.push({ productName, price, quantity: 1, totalPrice: price });
    }

    // Update cart summary
    updateCartSummary();
};

// Function to update cart summary in the footer
const updateCartSummary = () => {
    const cartItemsElement = document.getElementById('cart-items');
    const totalQuantityElement = document.getElementById('total-quantity');
    const totalAmountElement = document.getElementById('total-amount');

    // Clear previous cart items
    cartItemsElement.innerHTML = '';

    // Iterate through cart and display each item
    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `
            <p>${item.productName} - Quantity: ${item.quantity}</p>
            <p>Unit Price: $${item.price.toFixed(2)} - Total Price: $${item.totalPrice.toFixed(2)}</p>
        `;
        cartItemsElement.appendChild(cartItemElement);
    });

    // Calculate total quantity and total amount
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalAmount = cart.reduce((acc, item) => acc + item.totalPrice, 0);

    // Update total quantity and total amount in the footer
    totalQuantityElement.textContent = totalQuantity;
    totalAmountElement.textContent = totalAmount.toFixed(2);
};
