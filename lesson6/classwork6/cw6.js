// - Дано список імен.
let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let normalize = str => {
    for (const item of str) {
        if (item === '_' || item === '.' || item === '-') {
            str = str.replace(item + item + item, ' ').replace(item + item, ' ').replace(item, ' ');
        }
    }
    return str;
}
console.log(normalize(n2));



//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let random = () => {
    arr = [];
    for (let i = 0; i < 100; i++) {
        arr.push(Math.round(Math.random() * 100));
    }
    return arr;
}
console.log(random());


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let generated = random().sort((a, b) => b - a);
console.log(generated);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let generated2 = random().filter(item => item % 2 === 0);
console.log(generated2);


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let generated3 = random().map(item => item + '');
console.log(generated3);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
let genArr = random();
let sortNums = direction => direction === 'ascending' ? genArr.sort((a, b) => a - b) : direction === 'descending' ? genArr.sort((a, b) => b - a) : false;

console.log(sortNums('descending'));


// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sortArrByMonth = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(sortArrByMonth);



// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let sortArrMore5Month = coursesAndDurationArray.filter(obj => obj.monthDuration > 5);
console.log(sortArrMore5Month);



// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
let string = 'Hellookten!Onetwothree,fourfivesix,seveneightnineten';
let cutString = (str, n) => {
    let arr = [];
    for (let i = 0; n <= str.length; i++) {
        arr.push(str.slice(0, n));
        str = str.substr(n);
    }
    arr.push(str);
    return arr;
}

document.write(cutString(string,5));


