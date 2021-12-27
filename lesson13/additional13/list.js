
//
document.getElementById('deleteAll').onclick = () => {
    localStorage.clear();
    document.location.reload();
}

document.getElementById('back').onclick = () => {
    history.back();
}

let productsWrap = document.createElement('div');
productsWrap.classList.add('productsWrap');
let products = JSON.parse(localStorage.getItem('products'));

if (products) {

    products.forEach((product, index) => {
        setTimeout(() => {                          // - добавил периодичность появления списка - для красоты
            let productBox = document.createElement('div');
            productBox.classList.add('productBox');
            productBox.innerHTML = `<h3>${product.name}</h3>
                                    <h4>Кількість: ${product.amount} шт.</h4>
                                    <h4>Ціна одиниці: ${product.price} грн.</h4>
                                    <img src="${product.url}" alt="product photo"> `;
            let deleteProduct = document.createElement('button');
            deleteProduct.classList.add('delProd');
            deleteProduct.innerText = 'Видалити товар';

            setInterval(() => {
                if (productBox.style.boxShadow === 'grey 1px 1px 10px 10px') {
                    productBox.style.boxShadow = 'grey 1px 1px 5px 5px';
                    return;
                }
                productBox.style.boxShadow = 'grey 1px 1px 10px 10px';
            }, 1000);

            deleteProduct.onclick = () => {
                products.splice(products.indexOf(product), 1);
                localStorage.setItem('products', JSON.stringify(products));
                document.location.reload();
            }
            productBox.append(deleteProduct);
            productsWrap.append(productBox);
            document.body.append(productsWrap);
            console.log(product);



        }, index * 200);
    });
} else {
    document.write('У списку немає жодного товару');
}
