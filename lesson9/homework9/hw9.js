

// Все робити за допомоги js.
// - створити блок,
let div = document.createElement('div');


//     - додати йому класи wrap, collapse, alpha, beta
div.classList.add('wrap', 'collapse', 'alpha', 'beta');


// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div.style.background = 'coral';
div.style.color = 'gold';
div.style.fontSize = '20px';


// - додати цей блок в body.
document.body.appendChild(div);


// - клонувати його повністю, та додати клон в body.
let node = div.cloneNode();
document.body.appendChild(node);


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let arr = ['Main', 'Products', 'About us', 'Contacts'];
for (const string of arr) {
    let ul = document.body.getElementsByClassName('menu');
    let liElement = document.createElement('li');
    ul.item(0).appendChild(liElement);
    liElement.innerText = string;
}


// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (const arrElement of coursesAndDurationArray) {
    let div = document.createElement('div');
    let p = document.createElement('p');

    document.body.appendChild(div);
    div.style.border = "2px solid green";
    div.style.borderRadius = '5px';
    div.style.flexDirection = 'column';
    div.appendChild(p);
    p.innerText = 'Напрямок ' + arrElement.title + ' тривалість - ' + arrElement.monthDuration;
}


//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (const Element of coursesAndDurationArray) {
    const div = document.createElement('div');
    div.classList.add('item');
    const h1 = document.createElement('h1');
    h1.classList.add('heading');
    const p = document.createElement('p');
    p.classList.add('description');

    document.body.appendChild(div);
    div.append(h1, p);
}

