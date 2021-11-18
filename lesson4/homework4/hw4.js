// - створити функцію яка обчислює та повертає площу прямокутника висотою
const PI = 3.141592653589793238462643;

function rectSquare(sideA, sideB) {
    return `Площадь прямоугольника со сторонами ${sideA}см и ${sideB}см - ` + (sideA * sideB) + 'кв.см';
}

console.log(rectSquare(10, 20));


// - створити функцію яка обчислює та повертає площу кола
function circleSquare(radius) {
    return `Площадь круга с радиусом ${radius} - ` + PI * (radius ** 2) + 'кв.см';
}

console.log(circleSquare(10));


// - створити функцію яка обчислює та повертає площу циліндру
function cylinderSquare(height, radius) {
    return `Площадь цинидра высотой ${height}см и радиусом ${radius} - ` + 2 * PI * radius * (height + radius) + 'кв.см';
}

console.log(cylinderSquare(10, 20));


// - створити функцію яка приймає масив та виводить кожен його елемент
let arr = [1, 3, 5, 7, 9, 2, 4, 0, 6, 8,];

function arrayCheck(array) {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}

arrayCheck(arr);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function addPar(text) {
    document.write(`<p>${text}</p>`);
}

addPar('Hello Okten. 100500');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createUl(li_text) {
    document.write(`<ul><li>${li_text}</li><li>${li_text}</li><li>${li_text}</li></ul>`);
}

createUl('New list');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createUl2(li_text, li_quantity) {
    document.write('<ul>');
    for (let i = 0; i < li_quantity; i++) {
        document.write(`<li>${li_text}</li>`);
    }
    document.write('</ul>');
}

createUl2('Better late than never', 10);

//--------------другий варіант з перевірками------------
// function createUl2(li_text, li_quantity) {
//     document.write('<ul>');
//     if (typeof li_quantity !== 'string' && typeof li_quantity !== 'boolean' && typeof li_quantity !== 'object') {
//         for (let i = 0; i < li_quantity; i++) {
//             document.write(`<li>${li_text}</li>`);
//             document.write(typeof li_quantity);
//         }
//     }
//     document.write('</ul>');
// }


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let primitives = [1, 6, 9, false, 'hello', true, 'okten', 10, 54];
function creatorList(array) {
    document.write('<ul>');
    for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`);
    }
    document.write('</ul');
}

creatorList(primitives);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arrayObjects = [
    {id: 1, name: 'Bart', age: 10,},
    {id: 2, name: 'Homer', age: 40,},
    {id: 3, name: 'Marge', age: 38,},
    {id: 4, name: 'Lisa', age: 9,},
    {id: 5, name: 'Maggie', age: 1,},
];

function addObjects(array) {
    for (const arrayElement of array) {
        document.write('<div>');
        document.write(`${arrayElement.id} - ${arrayElement.name} - ${arrayElement.age} years old`);
        document.write('</div>');
    }
}

addObjects(arrayObjects);
