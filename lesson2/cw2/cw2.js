// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
let number1 = 3;
let number2 = 2;
if (number1 > number2) {
    document.write('число ' + number1 + ' максимальне з двох чисел ' + number1 + ' та ' + number2);
} else if (number1 === number2) {
    document.write('число ' + number1 + ' та число ' + number2 + ' рівні');
} else {
    document.write('число ' + number2 + ' максимальне з двох чисел ' + number1 + ' та ' + number2);
}
document.write('<br>');


//-----------------------------------------------------------------------------------------------------------------------------/
// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
let flat = +prompt('Введіть номер квартири');
if (flat > 0 && flat <= 20) {
    document.write(`Квартира номер ${flat} знаходиться у першому під'їзді`);
} else if (flat >= 21 && flat <= 48) {
    document.write(`Квартира номер ${flat} знаходиться у другому під'їзді`);
} else if (flat >= 49 && flat <= 90) {
    document.write(`Квартира номер ${flat} знаходиться у третьому під'їзді`);
} else {
    document.write(`Квартира номер ${flat} знаходиться хто-зна в якому під'їзді`);
}
document.write('<br>');


//------------------------------------------------------------------------------------------------------------------------------
// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
let number = 10;
if (number === 10) {
    document.write('ВІРНО');
} else {
    document.write('НЕВІРНО');
}
document.write('<br>');


//-------------------------------------------------------------------------------------------------------------------------
// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 4.
// якщо в змінну записали щось інше, спрацьовує else
let variable = undefined;
console.log(variable);
if (typeof variable === 'number') {
    document.write('1');
} else if (typeof variable === 'string') {
    document.write('2');
} else if (typeof variable === 'boolean') {
    document.write('3');
} else if (typeof variable === 'object') {
    document.write('4');
} else {
    document.write('else');
}
document.write('<br>');


//--------------------------------------------------------------------------------------------------------------------------
// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
let temp = 12;
if (temp >= 10 && temp <= 22) {
    document.write('Йдемо на навчання');
} else {
    document.write('Сидимо вдома і вчимося ОНЛАЙН');
}
document.write('<br>');


//---------------------------------------------------------------------------------------------------------------------------
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
let point = 4;
switch (point) {
    case 1:
        document.write('Ви виграли Авто');
        break;
    case 2:
        document.write('Ви виграли Мото');
        break;
    case 3:
        document.write('Ви виграли Телефон');
        break;
    case 4:
        document.write('Ви виграли Компьютер');
        break;
    case 5:
        document.write('Ви виграли Телескоп');
        break;
    default:
        document.write('Ви ввели невірне число');
}

