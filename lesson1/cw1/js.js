

// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.

document.write("<br/>Task1. ");
let mass = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = mass[0] + mass[1] + mass[2] + mass[3] + mass[4] + mass[5] + mass[6] + mass[7] + mass[8] + mass[9];
document.write(result);
// second way
let result2 = 0;
for (step = 0; step < mass.length; step++) {
    result2 += mass[step];
}
    document.write('<br/>'+result2);


// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

let book = {
    name: "Treasure Island",
    pages: 200,
    type: "fiction",
};
console.log(book);


// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

let book2 = {
    name: "Alice in the Wonderland",
    pages: 300,
    type: "non-fiction",
    authors: '',
};
console.log(book2);


// 4. Створити масив об'єктів books з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт


let book3 = {
    name: "Sherlock",
    pages: 25000,
    type: "fiction",
    authors: '',
}
let books = [book, book2, book3];
console.log(books[0], books[1], books[2]);


// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

document.write("<br/>Task5. ");
let height = 23;
let width = 10;
let S = height * width;
document.write("S прямокутника = " + S + "cm<sup>2</sup>");


// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v. Формула объема цилиндра V=PiR2*h, где R - радиус оснований, h - высота цилиндра

document.write("<br/>Task6. ");
let heightc = 10;
let dc = 4;
let V = 3.14 * ((dc / 2)**2) * heightc;
document.write('V циліндра = ' + V + 'cm<sup>3</sup>');


// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

document.write("<br/>Task7. ");
let n = 3;
let m = 4;
let k = Math.sqrt(Math.pow(n,2) + Math.pow(m,2));
document.write(`Гіпотенуза прямокутного трикутника з катетами ${n}см та ${m}см = ` + k + 'cm');