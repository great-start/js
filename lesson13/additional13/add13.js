
// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let formDiv = document.createElement('div');
let form = document.createElement('form');
form.setAttribute('name', 'addProd');
let inputProduct = document.createElement('input');
inputProduct.setAttribute('placeholder', 'назва товару');
inputProduct.setAttribute('type', 'text');
inputProduct.setAttribute('name', 'product');
let amount = document.createElement('input');
amount.setAttribute('placeholder', 'кількість товару');
amount.setAttribute('type', 'number');
amount.setAttribute('name', 'amount');
let price = document.createElement('input');
price.setAttribute('placeholder', 'ціна товару');
price.setAttribute('type', 'number');
price.setAttribute('name', 'price');
let url = document.createElement('input');
url.setAttribute('placeholder', 'картинка товару');
url.setAttribute('type', 'url');
url.setAttribute('name', 'url');
let add = document.createElement('button');
add.innerText = 'Додати';

form.append(inputProduct, amount, price, url, add);
formDiv.append(form);
document.body.append(formDiv);

document.forms.addProd.onsubmit = function (e) {
    e.preventDefault();
    let products = JSON.parse(localStorage.getItem('products')) || [];
    let prod = {id: products.length, name: this.product.value, amount: this.amount.value, price: this.price.value, url: this.url.value};
    products.push(prod);
    localStorage.setItem('products', JSON.stringify(products));
    this.product.value = '';
    this.amount.value = '';
    this.price.value = '';
    this.url.value = '';
};

let productsList = document.createElement('a');
productsList.classList.add('prodList');
productsList.innerText = 'Products List';
productsList.href = 'list.html';

document.body.appendChild(productsList);
