

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
const divOne = document.createElement('div');
divOne.classList.add('taskOne');
divOne.style.border = '1px solid lightgrey';
const form1 = document.createElement('form');
form1.setAttribute('name', 'formOne');
const input1_1 = document.createElement('input');
input1_1.setAttribute('name', 'inp1_1');
const input1_2 = document.createElement('input');
input1_2.setAttribute('name', 'inp1_2');
form1.append(input1_1, input1_2);
divOne.append(form1);
const divTwo = document.createElement('div');

divTwo.classList.add('taskOne');
divTwo.style.border = '1px solid lightgrey';
const form2 = document.createElement('form');
form2.setAttribute('name', 'formTwo');
const input2_1 = document.createElement('input');
input2_1.setAttribute('name', 'inp2_1');
const input2_2 = document.createElement('input');
input2_2.setAttribute('name', 'inp2_2');
form2.append(input2_1, input2_2);
divTwo.append(form2);

document.body.append(divOne, divTwo);

const buttonElement = document.createElement('button');
buttonElement.classList.add('taskOneButton');
buttonElement.innerText = 'СЛИВ В КОНСОЛЬ';
document.body.append(buttonElement);
buttonElement.onclick = () => {
    console.log(document.forms.formOne.inp1_1.value);
    console.log(document.forms.formOne.inp1_2.value);
    console.log(document.forms.formTwo.inp2_1.value);
    console.log(document.forms.formTwo.inp2_2.value);
}

document.write('<br><hr>');



//---------------------------------------------------------------------------------------------------------------------------------------------------
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
const div = document.createElement('div');
div.classList.add('taskTwo');
const inputRows = document.createElement('input');
inputRows.setAttribute('placeholder', 'кількість рядків');
const inputCell = document.createElement('input');
inputCell.setAttribute('placeholder', 'кількість ячеєк');
const inputTextIn = document.createElement('input');
inputTextIn.setAttribute('placeholder', 'вміст ячеєк');
const buttonTableCreate = document.createElement('button');
buttonTableCreate.innerText = 'Сгенерувати таблицю';

div.append(inputRows, inputCell, inputTextIn, buttonTableCreate);
document.body.append(div);

buttonTableCreate.addEventListener('click', function () {
    const rows = inputRows.value;
    const cell = inputCell.value;
    const text = inputTextIn.value;

    if (+inputRows.value !== 0 && +inputCell.value !== 0) {
        const table = document.createElement('table');
        for (let i = 0; i < +rows; i++) {
            const tr = document.createElement('tr');
            for (let j = 0; j < +cell; j++) {
                const td = document.createElement('td');
                td.innerText = text;
                tr.append(td);
            }
            table.append(tr);
        }
        document.body.append(table);
    }

})

document.write('<br><hr>');



//---------------------------------------------------------------------------------------------------------------------------------------------------
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
let arr = ['сука', 'скотина', 'придурок', 'дибіл'];
const divCheckWord = document.createElement('div');
divCheckWord.style.marginBottom = '30px';
const inputCurse = document.createElement('input');
const buttonCheck = document.createElement('button');
buttonCheck.innerText = 'Перевірка на матюки';

document.body.append(divCheckWord);
divCheckWord.append(inputCurse, buttonCheck);

buttonCheck.addEventListener('click', function () {
    arr.forEach(word => {
        inputCurse.value === word ? alert('Чувак! Припини лаятися!') : false;
    })
})

document.write('<hr>');


//---------------------------------------------------------------------------------------------------------------------------------------------------
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
let arr2 = ['сука', 'скотина', 'придурок', 'дибіл'];
const divCheckWordInSentence = document.createElement('div');
const inputCheckTwo = document.createElement('input');
const buttonCheckTwo = document.createElement('button');
buttonCheckTwo.innerText = 'Профільтрувати речення';

document.body.append(divCheckWordInSentence);
divCheckWordInSentence.append(inputCheckTwo, buttonCheckTwo);

buttonCheckTwo.addEventListener('click',function () {
    const words = inputCheckTwo.value.split(' ');
    for (const word of words) {
        for (const string of arr2) {
            word === string ? alert('Чувак! Не пиши в реченні матюки!') : false;
        }
    }
})



