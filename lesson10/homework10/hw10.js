// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
const paragraphElement = document.createElement('p');
paragraphElement.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam dignissimos expedita fugiat nam natus nobis nulla officia quod vitae';
paragraphElement.setAttribute('id', 'text');
document.body.appendChild(paragraphElement)
const buttonHiddenP = document.createElement('button');
buttonHiddenP.innerText = 'Hide P';
document.body.appendChild(buttonHiddenP);
buttonHiddenP.onclick = () => paragraphElement.style.display = 'none';



//---------------------------------------------------------------------------------------------------------------------------------------------------
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
const buttonElement = document.createElement('button');
buttonElement.innerText = 'Click on me';
document.body.appendChild(buttonElement);
buttonElement.onclick = () => buttonElement.style.visibility = 'hidden';
document.write('<br><hr>');



//----------------------------------------------------------------------------------------------------------------------------------------------------
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
const formCreated = document.createElement('form');
document.body.appendChild(formCreated);
formCreated.setAttribute('id', 'form1');
const inputElement = document.createElement('input');
inputElement.setAttribute('placeholder', 'Write down your age');
const buttonElem = document.createElement('button');
buttonElem.innerText = 'Send';
formCreated.append(inputElement, buttonElem);
formCreated.onsubmit = () => {
    // event.preventDefault();
    if (+inputElement.value !== 0 && +inputElement.value <= 18) {
        alert('Ваш вік меньше 18 років');
    }
};


//------------------------------------------------------------------------------------------------------------------------------------------------
// - Создайте меню, которое раскрывается/сворачивается при клике
const ulElement = document.createElement('ul');
ulElement.style.listStyle = 'none';
const aElement = document.createElement('a');
aElement.innerText = 'Меню';
aElement.setAttribute('href','#');
aElement.style.textDecoration = 'none';
const liElement = document.createElement('li');
const liElement2 = document.createElement('li');
const liElement3 = document.createElement('li');
liElement.innerText = 'Розділ 1';
liElement2.innerText = 'Розділ 2';
liElement3.innerText = 'Розділ 3';
ulElement.append(aElement, liElement, liElement2, liElement3);
document.body.appendChild(ulElement);
ulElement.onclick = () => {
    if (liElement.style.visibility !== 'hidden') {
        liElement.style.visibility = 'hidden';
        liElement2.style.visibility = 'hidden';
        liElement3.style.visibility = 'hidden';
    } else {
        liElement.style.visibility = 'visible';
        liElement2.style.visibility = 'visible';
        liElement3.style.visibility = 'visible';
    }
}



//---------------------------------------------------------------------------------------------------------------------------------------------------
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
const comments = [
    {
        title: 'Comment 1',
        body: 'Отправь это селфи в NASA, потому что ты звезда'
    }, {
        title: 'Comment 2',
        body: 'Это лучшее, что я видел за последнее время😍😍😍'
    }, {
        title: 'Comment 3',
        body: 'Это фото огонь🔥🔥🔥'
    }, {
        title: 'Comment 4',
        body: 'С такой фигурой можно смело идти за Оскаром😻😽😽'
    }
];
const wrap = document.createElement('div');
document.body.appendChild(wrap);
wrap.style.width = '200px';
comments.forEach(function(item){
    const div = document.createElement('div');
    div.style.flex = '1 0 0';
    div.style.border = '1px solid blue';
    div.style.borderRadius = '10px';
    div.style.padding = '10px';
    div.style.marginBottom = '20px';
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    h1.innerText = item.title;
    p.innerText = item.body;
    const button = document.createElement('button');
    button.innerText = 'Скрыть комент';
    button.onclick = () => {
        p.style.visibility = 'hidden';
    }

    wrap.appendChild(div);
    div.append(h1, p, button);
})

