
// 1. Створити пустий масив та :
// a. заповнити його 50 парними числами за допомоги циклу.
// b. заповнити його 50 непарними числами за допомоги циклу.
// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

let arr_1a = [];                          // 1.a
for (let i = 1; i <= 100; i++) {
    if (!(i % 2)) {
        arr_1a[arr_1a.length] = i;
    }
}
console.log(arr_1a);

let arr_1b = [];                          // 1.b
for (let i = 1; i <= 100; i++) {
    if (i % 2) {
        arr_1b[arr_1b.length] = i;
    }
}
console.log(arr_1b);

let arr_1c = [];                          // 1.c
for (let i = 0; i < 20; i++) {
    arr_1c[arr_1c.length] = Math.random() * 100;
}
console.log(arr_1c);

let arr_1d = [];                          // 1.d
for (let i = 0; i < 20; i++) {
    arr_1d[arr_1d.length] = Math.random() * (732 - 8) + 8;
}
console.log(arr_1d);


//----------------------------------------------------------------------------------------------------------------------------
// 2. Вивести за допомогою console.log кожен третій елемен
for (let i = 0; i < arr_1d.length; i++) {             // - для прикладу взяв створений вище массив arr_1d
    let p = i + 1;
    if (!(p % 3)) {
        console.log(arr_1d[i]);
    }
}


//------------------------------------------------------------------------------------------------------------------------------
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
let arr_3 = [];
for (let i = 0; i < 100; i++) {
    arr_3[arr_3.length] = Math.round(Math.random() * (732 - 8) + 8);
}
for (let i = 0; i < arr_3.length; i++) {         // - для перевірки взяв створений массив arr_3
    let p = i + 1;
    if (!(p % 3) && !(arr_3[i] % 2)) {
        console.log(arr_3[i]);
    }
}


//------------------------------------------------------------------------------------------------------------------------------
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let arr_4 = arr_3;        // - для перевірки взяв массив arr_4, ідентичний arr_3
let arr_4_2 = [];         // arr_4_2 - массив для запису в нього з массиву arr_4
for (let i = 0; i < arr_4.length; i++) {
    let p = i + 1;
    if (!(p % 3) && !(arr_4[i] % 2)) {
        console.log(arr_4[i]);
        arr_4_2[arr_4_2.length] = arr_4[i];
    }
}
console.log(arr_4_2);


//------------------------------------------------------------------------------------------------------------------------------
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
let example = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let i = 0; i < example.length; i++) {
    if (example[i + 1] && !(example[i + 1] % 2)) {
        console.log(example[i]);
    }
}


//------------------------------------------------------------------------------------------------------------------------------
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let arr_6 = [100, 250, 50, 168, 120, 345, 188];
let price = 0;
for (let number of arr_6) {
    price += number;
}
console.log(price / arr_6.length);


//------------------------------------------------------------------------------------------------------------------------------
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let arr_7 = [];             // - початковий массив arr_7
let arr_7_2 = [];          // массив arr_7_2 - куди переносяться елементи
for (let i = 0; i < 20; i++) {
    arr_7[i] = Math.round(Math.random() * (732 - 8) + 8);
    arr_7[i] *= 5;
    arr_7_2[i] = arr_7[i];
}
console.log(arr_7_2);


//------------------------------------------------------------------------------------------------------------------------------
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let arr_8 = [1, false, 20, true, [], -50, {}, null, undefined, 'hello', 100, 0, [], 'second', {}];
let arr_number = [];
for (let arr8Element of arr_8) {
    if (typeof arr8Element === 'number') {
        arr_number[arr_number.length] = arr8Element;
    }
}
console.log(arr_number);


//----------------------------------------------------------------------------------------------------------------------------
//  - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
//
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
// {
// id: 1, // <===
// name: 'vasya',
// age: 31,
// status: false,
// address: {
// user_id: 1, // <===
// country: 'Ukraine',
// city: 'Ternopil'
// }
// },
// // TO BE CONTINUED .....
// ]
let usersWithCities = [];
for (const usersWithIdElement of usersWithId) {
    for (const citiesWithIdElement of citiesWithId) {
        if (usersWithIdElement.id === citiesWithIdElement.user_id) {
            usersWithCities[usersWithCities.length] = {
                id: usersWithIdElement.id,
                name: usersWithIdElement.name,
                age: usersWithIdElement.age,
                status: usersWithIdElement.status,
                address: {
                    user_id: citiesWithIdElement.user_id,
                    country: citiesWithIdElement.country,
                    city: citiesWithIdElement.city,
                }
            };
        }
    }
}
console.log(usersWithCities);


//-------------------------------------------------------------------------------------------------------------------------------
//  - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let arr_10 = [];
for (let i = 0; i < 10; i++) {
    arr_10[i] = Math.round(Math.random()*100);
    if (!(arr_10[i] % 2) && arr_10[i] !== 0) {
        console.log(arr_10[i]);
    }
}


//-------------------------------------------------------------------------------------------------------------------------------
//  - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let arr_11 = [123, 67, 12, 0, 87, 10, 50, 43, 252, 33];
let arr_11_2 = [];
i = 0;
while (i < arr_11.length) {
    arr_11_2[i] = arr_11[i];
    i++;
}
console.log(arr_11_2);


//-------------------------------------------------------------------------------------------------------------------------------
//  - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
//  - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
//  - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let arr_12 = ['a', 'b', 'c'];
let word = '';
for (const string of arr_12) {
    word += string;
}
console.log(word);

word2 = '';
i = 0;
while (i <= arr_12.length - 1) {
    word2 += arr_12[i];
    i++;
}
console.log(word2);

word3 = '';
for (let i = 0; i < arr_12.length; i++) {
    word3 += arr_12[i];
}
console.log(word3);