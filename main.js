let obj = {
    "All": [
        { "id": 0, "name": "Чизбургер-пицца", "price": 395, "img": "./assets/img/firstpizza.png", "number": 1 },
        { "id": 1, "name": "Сырная", "price": 450, "img": "./assets/img/second.png", "number": 1 },
        { "id": 2, "name": "Креветки по-азиатски", "price": 290, "img": "./assets/img/third.png", "number": 1 },
        { "id": 3, "name": "Сырный цыпленок", "price": 385, "img": "./assets/img/forth.png", "number": 1 },
        { "id": 4, "name": "Чизбургер-пицца", "price": 395, "img": "./assets/img/firstpizza.png", "number": 1 },
        { "id": 5, "name": "Сырная", "price": 450, "img": "./assets/img/second.png", "number": 1 },
        { "id": 6, "name": "Креветки по-азиатски", "price": 290, "img": "./assets/img/third.png", "number": 1 },
        { "id": 7, "name": "Сырный цыпленок", "price": 385, "img": "./assets/img/forth.png", "number": 1 }
    ],
    "Meat": [
        { "id": 0, "name": "Чизбургер-пицца", "price": 395, "img": "./assets/img/firstpizza.png", "number": 1 },
        { "id": 1, "name": "Сырная", "price": 450, "img": "./assets/img/second.png", "number": 1 }
    ],
    "Vigtails": [
        { "id": 0, "name": "Креветки по-азиатски", "price": 290, "img": "./assets/img/third.png", "number": 1 },
        { "id": 1, "name": "Сырный цыпленок", "price": 385, "img": "./assets/img/forth.png", "number": 1 }
    ],
    "Gril": [
        { "id": 0, "name": "Креветки по-азиатски", "price": 290, "img": "./assets/img/firstpizza.png", "number": 1 }
    ],
    "Ostriy": [
        { "id": 0, "name": "Сырная", "price": 450, "img": "./assets/img/second.png", "number": 1 },
        { "id": 1, "name": "Креветки по-азиатски", "price": 290, "img": "./assets/img/third.png", "number": 1 }
    ],
    "Close": [
        { "id": 0, "name": "Креветки по-азиатски", "price": 290, "img": "./assets/img/forth.png", "number": 1 }
    ]
};

function renderPizzas(pizzaList) {
    const pizzaContainer = document.getElementById('pizzas');
    pizzaContainer.innerHTML = '';
    pizzaList.forEach(pizza => {
        const pizzaElement = document.createElement('div');
        pizzaElement.classList.add('pizza');
        pizzaElement.innerHTML = `
            <img src="${pizza.img}" alt="${pizza.name}">
            <h3>${pizza.name}</h3>
            <div class = 'ii'>
               <button class = 'b1' type = 'button'>
                   <p>тонкое</p>
              </button>
                <button class = 'b2' type = 'button'>
                   <p>традиционное</p>
              </button>
                <button class = 'b3' type = 'button'>
                   <p>26 см.</p>
              </button>
                <button class = 'b3' type = 'button'>
                   <p>30 см.</p>
              </button>
                <button class = 'b3' type = 'button'>
                   <p>40 см.</p>
              </button>
            </div>
        <div class='fff'>
            <p>от ${pizza.price} ₽</p>
            <button>+ Добавить</button>
        </div>
      
        `;
        pizzaContainer.appendChild(pizzaElement);
    });
}







document.querySelectorAll('.filters button').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        renderPizzas(obj[filter]);
    });
});

// Default render all pizzas
renderPizzas(obj['All']);


const buttons = document.querySelectorAll('.button');

let lastClickedButton = null;

buttons.forEach(button => {
    button.addEventListener('click', function () {
        if (lastClickedButton) {
            lastClickedButton.style.backgroundColor = '#F9F9F9';
            lastClickedButton.style.color = '#2C2C2C'
        }
        this.style.backgroundColor = '#2C2C2C';
        this.style.color = '#F9F9F9'
        lastClickedButton = this;
    });
});




document.getElementById('sortSelect').addEventListener('change', function () {
    const sortBy = this.value;
    let sortedPizzas = [];

    if (sortBy === 'popularity') {
        sortedPizzas = obj['All'].sort((a, b) => b.number - a.number);
    } else if (sortBy === 'price') {
        sortedPizzas = obj['All'].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'alphabet') {
        sortedPizzas = obj['All'].sort((a, b) => a.name.localeCompare(b.name));
    }

    renderPizzas(sortedPizzas);
});

// Default render all pizzas
renderPizzas(obj['All']);
