
// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

document.body.addEventListener('click', function (e) {
    const info = {};
    info.tagName = e.target.tagName;
    info.classes = e.target.className ? e.target.className : 'немає классів';
    info.id = e.target.getAttribute('id') ? e.target.getAttribute('id') : 'немає id';
    info.height_width = `${e.target.clientHeight} * ${e.target.clientWidth}`;
    console.log(info);
})




//---------------------------------------------------------------------------------------------------------------------------------------------------
// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
//
document.body.addEventListener('mousedown', function (e) {
    const divPopup = document.createElement('div');
    divPopup.setAttribute('id', 'info');
    divPopup.style.position = 'absolute';
    divPopup.style.top = e.clientY + 'px';
    divPopup.style.left = e.clientX + 'px';
    divPopup.style.width = '200px';
    divPopup.style.height = '200px';
    divPopup.style.background = 'lightcyan';
    divPopup.style.opacity = '0.9';
    const pTag = document.createElement('p');
    pTag.innerHTML = `<b>Тег</b>: ${e.target.tagName}`;
    const pClasses = document.createElement('p');
    pClasses.innerHTML = `<b>Класси</b>: ${e.target.classList}`;
    const pId = document.createElement('p');
    pId.innerHTML = `<b>Id</b>: ${e.target.getAttribute('id')}`;
    const pHeight_Width = document.createElement('p');
    pHeight_Width.innerHTML = `<b>Height*Width</b>: ${e.target.clientHeight}px*${e.target.clientWidth}px`;

    document.body.append(divPopup);
    divPopup.append(pTag, pClasses, pId, pHeight_Width);
});

document.body.addEventListener('mouseup', function () {
    const elementById = document.getElementById('info');
    elementById.remove();
});

document.write('<hr>');



//---------------------------------------------------------------------------------------------------------------------------------------------------
// -- взять массив пользователей
let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

const divCheckboxes = document.createElement('div');
divCheckboxes.classList.add('checkboxes');
divCheckboxes.style.margin = '20px';
divCheckboxes.style.border = '1px solid darkgrey';
divCheckboxes.style.padding = '10px';
const labelStatus = document.createElement('label');
const inputStatus = document.createElement('input');
inputStatus.setAttribute('type', 'checkbox');
labelStatus.innerText = 'Фільтр за статусом';
labelStatus.append(inputStatus);
const labelAge = document.createElement('label');
const inputAge = document.createElement('input');
inputAge.setAttribute('type', 'checkbox');
labelAge.innerText = 'Фільтр за віком';
labelAge.append(inputAge);
const labelCity = document.createElement('label');
const inputKiev = document.createElement('input');
inputKiev.setAttribute('type', 'checkbox');
labelCity.innerText = 'Фільтр за містом';
labelCity.append(inputKiev);

divCheckboxes.append(labelStatus, labelAge, labelCity);
document.body.append(divCheckboxes);

divCheckboxes.addEventListener('click', function () {
    function createContainerDivUsers() {
        const containerUsers = document.createElement('div');
        containerUsers.classList.add('containerUsers');
        document.body.append(containerUsers);
    }

    function selection(divContainer, users) {
        users.forEach(user => {
            const divUser = document.createElement('div');
            for (const elementKey in user) {
                if (elementKey !== "address") {
                    const p = document.createElement('p');
                    p.innerText = `${elementKey}: ${user[elementKey]}`;
                    divUser.append(p);
                } else {
                    for (const addressItems in user.address) {
                        const p = document.createElement('p');
                        p.innerText = `${addressItems}: ${user.address[addressItems]}`;
                        divUser.append(p);
                    }
                }
            }
            divContainer.appendChild(divUser);
        })
    }

    if (inputStatus.checked && !inputAge.checked && !inputKiev.checked) {
        createContainerDivUsers();
        let arrFilter = usersWithAddress.filter(item => item.status === false);
        selection(document.body.getElementsByClassName('containerUsers')[0], arrFilter);
    }
    if (!inputStatus.checked && inputAge.checked && !inputKiev.checked) {
        createContainerDivUsers();
        let arrFilter = usersWithAddress.filter(item => item.age >= 29);
        selection(document.body.getElementsByClassName('containerUsers')[0], arrFilter);
    }
    if (!inputStatus.checked && !inputAge.checked && inputKiev.checked) {
        createContainerDivUsers();
        let arrFilter = usersWithAddress.filter(item => item.address.city === 'Kyiv');
        selection(document.body.getElementsByClassName('containerUsers')[0], arrFilter);
    }
    if (inputStatus.checked && inputAge.checked && !inputKiev.checked) {
        document.body.getElementsByClassName('containerUsers')[0].remove();
        createContainerDivUsers();
        let arrFilter = usersWithAddress.filter(item => item.status === false && item.age >= 29);
        selection(document.body.getElementsByClassName('containerUsers')[0], arrFilter);
    }
    if (!inputStatus.checked && inputAge.checked && inputKiev.checked) {
        document.body.getElementsByClassName('containerUsers')[0].remove();
        createContainerDivUsers();
        let arrFilter = usersWithAddress.filter(item => item.age >= 29 && item.address.city === 'Kyiv');
        selection(document.body.getElementsByClassName('containerUsers')[0], arrFilter);
    }
    if (inputStatus.checked && !inputAge.checked && inputKiev.checked) {
        document.body.getElementsByClassName('containerUsers')[0].remove();
        createContainerDivUsers();
        let arrFilter = usersWithAddress.filter(item => item.status === false && item.address.city === 'Kyiv');
        selection(document.body.getElementsByClassName('containerUsers')[0], arrFilter);
    }
    if (inputStatus.checked && inputAge.checked && inputKiev.checked) {
        document.body.getElementsByClassName('containerUsers')[0].remove();
        createContainerDivUsers();
        let arrFilter = usersWithAddress.filter(item => item.status === false && item.address.city === 'Kyiv' && item.age >= 29);
        selection(document.body.getElementsByClassName('containerUsers')[0], arrFilter);
    }

});



//---------------------------------------------------------------------------------------------------------------------------------------------------
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
function transition(element) {
    const divSelector = document.createElement('div');
    divSelector.classList.add('selector');
    const up = document.createElement('button');
    up.innerText = 'Вперед';
    const down = document.createElement('button');
    down.innerText = 'Назад';

    document.body.append(divSelector);
    divSelector.append(up, down);

    const elementsObj = {};
    let index = 0;

    function recursive(element) {
        if (element.children.length) {
            for (const elementElement of element.children) {
                elementsObj[index] = elementElement;
                index++;
                recursive(elementElement);
            }
        }
    }

    recursive(element);

    let click = 0;
    up.onclick = () => {
        if (elementsObj[click]) {
            console.log(elementsObj[click]);
            click++;
        }
    };

    down.onclick = () => {
        click--;
        if (elementsObj[click]) {
            console.log(elementsObj[click]);
        }
    };
}

transition(document.body);




//---------------------------------------------------------------------------------------------------------------------------------------------------
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
const carouselDiv = document.createElement('div');
carouselDiv.classList.add('carousel');
carouselDiv.style.backgroundImage = 'url("img/1.jpg")';
const left = document.createElement('button');
left.innerText = 'Left';
const right = document.createElement('button');
right.innerText = 'Right';

document.body.append(carouselDiv);
carouselDiv.append(left, right);

let point = 1;
right.onclick = () => {
    point >= 4 ? point = 0 : false;
    point++;
    carouselDiv.style.backgroundImage = '' + `url("img/${point}.jpg")` + '';
    console.log(point);
    point >= 4 ? point = 0 : false;
};

left.onclick = () => {
    point--;
    point <= 0 ? point = 4 : false;
    carouselDiv.style.backgroundImage = '' + `url("img/${point}.jpg")` + '';
    console.log(point);

};





//----------------------------------------------------------------------------------------------------------------------------------------------------
//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан


document.body.onmousedown = () => document.getSelection().removeAllRanges();

document.body.onmouseup = function (e) {
    if (window.getSelection) {
        let selObj = document.getSelection();
        e.target.innerHTML = e.target.innerText.slice(0, selObj.anchorOffset) + '<span style="color: #d31d1d">' + e.target.innerText.slice(selObj.anchorOffset, selObj.focusOffset) +
            '</span>' + e.target.innerText.slice(selObj.focusOffset, e.target.innerText.length);
    }
}




