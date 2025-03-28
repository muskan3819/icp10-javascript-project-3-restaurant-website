let cart = [];
function addToCart(itemName) {
    let existingItem = cart.find(item => item.name === itemName);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name: itemName, quantity: 1 });
    }
    displayCart();
}
function displayCart() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
    }
    let cartContent = 'Your Cart:\n';
    cart.forEach(item => {
        cartContent += `${item.name} (${item.quantity})\n`;
    });

    alert(cartContent);

    //window.location.href = './payment.html'; 
}

