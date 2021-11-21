// Всі функції повинні бути описані стрілочним типом, та selfinvoke!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою
let rectangleSquare = (a, b) => a * b;
(function (a, b) {
    return a * b;
}(10, 10));
console.log(rectangleSquare(10, 10));


// - створити функцію яка обчислює та повертає площу кола
let cicleSquare = (radius) => Math.PI * radius ** 2;
(function (radius) {
    return Math.PI * radius ** 2;
}(10));
console.log(cicleSquare(10));


// - створити функцію яка обчислює та повертає площу циліндру
let cylinderSquare = (radius, height) => 2 * Math.PI * radius * (radius + height);
(function (radius, height) {
    return 2 * Math.PI * radius * (radius + height);
}(10, 50));
console.log(cylinderSquare(10, 50));


// - створити функцію яка приймає масив та виводить кожен його елемент
let array = [1, 4, 8, 'hello', 'Okten', false, true, null, undefined, [], 25, {}];
let ShowAllElements = (array) => {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}
(function (array) {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}(array));
ShowAllElements(array);


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let CreateP = text => document.write(`<p>${text}</p>`);
(function (text) {
    document.write(`<p>${text}</p>`);
}('Hello Okten. 100500'));
CreateP('Hello Okten. 100500');


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let CreateUl = text => {
    document.write('<ul>');
    CreateLi(text);
    document.write('</ul>');
};
let CreateLi = text => document.write(`<li>${text}</li><li>${text}</li><li>${text}</li>`);
CreateUl('Hello Okten');

(function (text) {
    document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
}('Hello Okten'));


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let CreateUlLimit = (text, limit) => {
    document.write('<ul>');
    for (let i = 0; i < limit; i++) {
        CreateLiLimit(text);
    }
    document.write('</ul>');
};
let CreateLiLimit = text => document.write(`<li>${text}</li>`);
CreateUlLimit('Hello Okten', 3);

(function (text, limit) {
    document.write(`<ul>`);
    for (let i = 0; i < limit; i++) {
        CreateLiLimit(text);
    }
    document.write(`</ul>`);
}('Hello Okten', 3));


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let ArrayPrimitives = array => {
    createTag('open', 'ul');
    for (const item of array) {
        createTag('open', 'li');
        document.write(item);
        createTag('close', 'li');
    }
    createTag('close', 'ul');
};
let createTag = (action, tag) => (action === 'open') ? document.write(`<${tag}>`) : document.write(`</${tag}>`);
ArrayPrimitives(array);


(function (array) {
    document.write('<ul>');
    for (const arrayElement of array) {
        document.write('<li>');
        document.write(arrayElement);
        document.write('</li>');
    }
    document.write('</ul>');
}(array));


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arrayObjects = [
    {id: 1, name: 'Bart', age: 10,},
    {id: 2, name: 'Homer', age: 40,},
    {id: 3, name: 'Marge', age: 38,},
    {id: 4, name: 'Lisa', age: 9,},
    {id: 5, name: 'Maggie', age: 1,},
];

let ShowObjects = array => {
    for (const arrayElement of array) {
        createTag('open','div');
        for (const arrayElementKey in arrayElement) {
            document.write(`${arrayElementKey} - ${arrayElement[arrayElementKey]} `);
        }
        createTag('close','div');
    }
};
ShowObjects(arrayObjects);

(function (array) {
    for (const arrayElement of array) {
        createTag('open','div');
        document.write(`${arrayElement.id} -  ${arrayElement.name} - age ${arrayElement.age}`);
        createTag('close','div');
    }
}(arrayObjects));












