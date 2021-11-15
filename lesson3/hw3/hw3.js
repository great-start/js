// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let arr_num = [10, 20, 30, 40, 50];
let arr_str = ['one', 'two', 'three', 'four', 'five'];
let arr_mix = [25, 'ten', 'hello', true, false];
console.log(arr_num, arr_str, arr_mix);


//---------------------------------------------------------------------------------------------------------------------------
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let array = [];
array[0] = 'lets';
array[1] = 'go';
array[2] = 'guys';
console.log(array);


//---------------------------------------------------------------------------------------------------------------------------
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
for (let i = 0; i < 10; i++) {
    document.write('<div>Hello js</div>');
}
for (let i = 1; i < 11; i++) {
    document.write(`<div>It's not enough ${i}</div>`);
}
let h = 0;
while (h < 20) {
    document.write('<h1>Text block</h1>');
    h++;
}
let m = 1;
while (m < 21) {
    document.write(`<h1>Text block ${m}</h1>`);
    m++;
}


//---------------------------------------------------------------------------------------------------------------------------
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

let strings = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
for (let i = 0; i < strings.length; i++) {
    console.log(strings[i]);
}

let mixs = [1, 2, 'three', 'four', 'five', 'six', {}, [], true, false];
for (let i = 0; i < mixs.length; i++) {
    console.log(mixs[i]);
}

let find_type_of_variables = [1, 2, 'three', true, 'five', 7, 'seven', 'nine', true, false];
for (let i = 0; i < find_type_of_variables.length; i++) {
    if (typeof find_type_of_variables[i] === 'boolean') {
        console.log(find_type_of_variables[i]);
    }
}
for (let i = 0; i < find_type_of_variables.length; i++) {
    if (typeof find_type_of_variables[i] === 'number') {
        console.log(find_type_of_variables[i]);
    }
}
for (let i = 0; i < find_type_of_variables.length; i++) {
    if (typeof find_type_of_variables[i] === 'string') {
        console.log(find_type_of_variables[i]);
    }
}


//---------------------------------------------------------------------------------------------------------------------------
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
let empty_arr = [];
empty_arr[0] = 'one';
empty_arr[1] = 12;
empty_arr[2] = 'two';
empty_arr[3] = 24;
empty_arr[4] = [];
empty_arr[5] = {};
empty_arr[6] = false;
empty_arr[7] = [];
empty_arr[8] = true;
empty_arr[9] = false;
empty_arr[10] = 44;
for (let emptyArrElement of empty_arr) {
    console.log(emptyArrElement);
}

for (let i = 1; i <= 10; i++) {
    if (i === 6) {                   // довільний номер кроку
        document.write(`Номер кроку ${i}`);
        console.log('номер кроку ' + i);
    }
}

for (let i = 1; i <= 100; i++) {
    if (i === 59) {                  // довільний номер кроку
        document.write(`Номер кроку ${i}`);
        console.log('номер кроку ' + i);
    }
}
document.write('<br>');

for (let i = 1; i <= 200; i += 2) {
    if (i === 61) {                   // довільний номер кроку
        document.write(`Номер кроку ${i}`);
    }
}
document.write('<br>');

document.write('парні -');
for (let i = 1; i <= 100; i++) {     // вивести тільки парні кроки
    if (!(i % 2)) {
        document.write(` ${i}`);
        console.log(`${i} `);
    }
}
document.write('<br>');

document.write('непарні -');
for (let i = 1; i <= 100; i++) {     // вивести тільки непарні кроки
    if (i % 2) {
        document.write(` ${i}`);
        console.log(`${i} `);
    }
}