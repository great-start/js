
// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

let word = 'hello';
let word2 = 'owu';
let word3 = 'com';
let word4 = 'ua';
let num = 1;
let num2 = 10;
let num3 = -999;
let num4 = 123;
let num5 = 2.7;
let num6 = 16;
let PI = 3.14;
let bool1 = true;
let bool2 = false;
console.log(word, word2, word3, word4, num, num2, num3, num4, num5, num6, PI, bool1, bool2);
alert(word + word2 + word3 + word4 + num + num2 + num3 + num4 + num5 + num6 + PI + bool1 + bool2);
document.write(`${word} ${word2} ${word3} ${word4} ${num} ${num2} ${num3} ${num4} ${num5} ${num6} ${PI} ${bool1} ${bool2}`);


//     - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

document.write('<br/>');
word = 'Vanya';
word2 = 'Hello';
word3 = 'first';
word4 = 'second';
num = 100;
num2 = 200;
num3 = 1500;
num4 = "number";
num5 = 120.56;
num6 = -600.5;
PI = 3.65;
bool1 = false;
bool2 = 'string';
document.write(word);
document.write(bool2);
console.log(word, word2, word3, word4, num, num2, num3, num4, num5, num6, PI, bool1, bool2);
alert(word + word2 + word3 + word4 + num + num2 + num3 + num4 + num5 + num6 + PI + bool1 + bool2);
document.write(`${word} ${word2} ${word3} ${word4} ${num} ${num2} ${num3} ${num4} ${num5} ${num6} ${PI} ${bool1} ${bool2}`);


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

document.write('<br/>');
let firstName = 'Jenya';
let middleName = 'Vitalievich';
let lastName = 'Bilinevich';
let person = firstName + middleName + lastName;
console.log(person);


// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

document.write('<br/>');
let fn = prompt('Enter your name');
let ln = prompt('Enter your surname');
let age = prompt('Enter your age');
document.write('Вітаю ' + fn + ' ' + ln + '. Тобі ' + `${age}` + ' років');


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100; let b = '100'; let c = true;
console.log(typeof a, typeof b, typeof c);
document.write('<br/>');

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
//     5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true

document.write(5 < 6);//true
document.write('<br/>');document.write(5 > 6);    //false
document.write('<br/>');document.write(5 == 6);   //false
document.write('<br/>');document.write(5 >= 6);   //false
document.write('<br/>');document.write(10 == 10);   //true
document.write('<br/>');document.write(10 === 10);  //true
document.write('<br/>');document.write(10 != 10);   //false
document.write('<br/>');document.write(10 !== 10);   //false
document.write('<br/>');document.write(10 > 10);   //false
document.write('<br/>');document.write(123 === '123');   //false
document.write('<br/>');document.write(123 == '123');   //true


// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
    let str = "20";
let ab = 5;
document.write(str + ab + "<br/>");  // интерпретирует как строку(конкатенация), выведет 205
document.write(str - ab + "<br/>");  // интерпретирует как числовое значение, скорее всего из-за знака минус (-)
document.write(str * "2" + "<br/>");  // посчитает как числовое значение, скорее всего из-за знака умножения (*)
document.write(str / 2 + "<br/>");     // посчитает как числовое значение, скорее всего из-за знака деления (/)

