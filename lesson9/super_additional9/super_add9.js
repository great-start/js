
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];



// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
let arr = [];
for (const arrElement of users) {
    arr[arr.length] = arrElement.address;
}
console.log(arr);


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
for (const arrElement of users) {
    const newChild = document.createElement('div');
    document.body.appendChild(newChild);
    newChild.innerHTML = arrElement.name + arrElement.age + arrElement.address.city + arrElement.address.country + arrElement.address.street + arrElement.address.houseNumber + arrElement.status;
}


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
users.forEach(element => {
    const wrapDiv = document.createElement('div');
    const nameDiv = document.createElement('div');
    nameDiv.innerText = element.name;
    const ageDiv = document.createElement('div');
    ageDiv.innerText = element.age;
    const addressDiv = document.createElement('div');
    addressDiv.innerText = element.address.city + element.address.country + element.address.street + element.address.houseNumber;
    const statusDiv = document.createElement('div');
    statusDiv.innerText = element.status;

    document.body.appendChild(wrapDiv);
    wrapDiv.append(nameDiv, ageDiv, addressDiv, statusDiv);
})



// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

users.forEach(element => {
    const wrap = document.createElement('div');
    wrap.style.border = '2px solid green';
    wrap.style.margin = '20px';
    wrap.style.padding = '10px';
    for (const key in element) {
        if (key !== 'address') {
            const div = document.createElement('div');
            wrap.appendChild(div);
            div.innerText = `${key} - ${element[key]}`;
        }
    }
    const addressDiv = document.createElement('div');
    wrap.appendChild(addressDiv);
    addressDiv.style.border = '1px solid grey';
    addressDiv.style.padding = '10px';
    for (const childKey in element.address) {
        const pAddress = document.createElement('p');
        wrap.lastChild.appendChild(pAddress);
        pAddress.innerText = `${childKey} - ${element.address[childKey]}`;
    }

    document.body.appendChild(wrap);
})