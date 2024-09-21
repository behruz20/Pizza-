document.addEventListener('DOMContentLoaded', () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cartItems');

    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p>Ваша корзина пуста.</p>';
    } else {
        cartItems.forEach(pizza => {
            const pizzaElement = document.createElement('div');
            pizzaElement.classList.add('pizza');
            pizzaElement.innerHTML = `
                <img src="${pizza.img}" alt="${pizza.name}">
                <h3>${pizza.name}</h3>
                <p>Количество: ${pizza.number}</p>
                <p>Цена: ${pizza.price * pizza.number} ₽</p>
            `;
            cartContainer.appendChild(pizzaElement);
        });
    }
});


buttons.forEach(button => {
    button.addEventListener('click', function() {
        if (lastClickedButton) {
            lastClickedButton.style.backgroundColor = '#F9F9F9';
            lastClickedButton.style.color = '#2C2C2C';
        }
        this.style.backgroundColor = '#2C2C2C';
        this.style.color = '#F9F9F9';
        lastClickedButton = this;
    });
});