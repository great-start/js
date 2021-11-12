// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 15;
if (time <= 15) {
    document.write(time + 'хв. припадає до першої чверті');
} else if (time <= 30) {
    document.write(time + 'хв. припадає до другої чверті');
} else if (time <= 45) {
    document.write(time + 'хв. припадає до третьої чверті');
} else if (time <= 59) {
    document.write(time + 'хв. припадає до четвертої чверті');
} else {
    document.write('неправильно введені дані');
}


//------------------------------------------------------------------------------------------------------------------------------
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
document.write('<br>');
let day = 45;
if (day <= 10) {
    document.write(day + 'число припадає до першої декади');
} else if (day <= 20) {
    document.write(day + 'число припадає до другої декади');
} else if (day <= 31) {
    document.write(day + 'число припадає до третьої декади');
}


//------------------------------------------------------------------------------------------------------------------------------
// - У нас є змінна test не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
let test = false;
if (!test) {             // first variant
    console.log('вірно');
} else {
    console.log('неправильно');
}
!test ? console.log('вірно') : console.log('неправильно');    // second variant


//----------------------------------------------------------------------------------------------------------------------------
// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = 3;
if (a !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}


//----------------------------------------------------------------------------------------------------------------------------
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
document.write('<br>');
let day_of_week = +prompt('Please, write the day of the week');
switch (day_of_week) {
    case 1:
        document.write('Monday`s schedule...');
        break;
    case 2:
        document.write('Tuesday`s schedule...');
        break;
    case 3:
        document.write('Wednesday`s schedule...');
        break;
    case 4:
        document.write('Thursday schedule...');
        break;
    case 5:
        document.write('Friday`s schedule...');
        break;
    case 6:
        document.write('Saturday`s schedule...');
        break;
    case 7:
        document.write('Sunday`s schedule...');
        break;
    default:
        document.write('You wrote wrong number of the day');
}


//------------------------------------------------------------------------------------------------------------------------------
// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
document.write('<br>');
let year = 2027;
year % 4 ? document.write(`${year} - цей рік не високосний`) : document.write(`${year} - цей рік високосний`);


// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
document.write('<br>');
let answer = prompt('Яка «офіційна» назва JavaScript?');
if (answer === 'ECMAScript') {
    document.write('Правильно');
} else {
    document.write('Не знаєте? ECMAScript!');
}