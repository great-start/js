// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
function OneOrMany() {
    if (arguments.length === 1) {
        console.log(arguments[arguments.length - 1]);
    } else {
        let j = '';
        for (let i = 0; i < arguments.length; i++) {
            j += arguments[i];
        }
        console.log(j);
    }
}

OneOrMany('one', 'two');


//---------------------------------------------------------------------------------------------------------------------------------
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
let first = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
let second = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function Result(first_array, second_array) {
    let result_array = [];
    for (let i = 0; i < first_array.length; i++) {
        for (let j = 0; j < second_array.length; j++) {
            if (i === j) {
                result_array[result_array.length] = first_array[i] + second_array[i];
            }
        }
    }
    return result_array;
}

console.log(Result(first, second));


//-------------------------------------------------------------------------------------------------------------------------------
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
let ArrayOfObjects = [
    {id: 1, name: 'Bart', age: 10,},
    {id: 2, name: 'Homer', age: 40,},
    {id: 3, name: 'Marge', age: 38,},
    {id: 4, name: 'Lisa', age: 9,},
    {id: 5, name: 'Maggie', age: 1,},
];

function ReturnKeys(array) {
    let keys = [];
    for (const arrayElement of array) {
        for (const arrayElementKey in arrayElement) {
            keys[keys.length] = arrayElementKey;
        }
    }
    return keys;
}

console.log(ReturnKeys(ArrayOfObjects));


//--------------------------------------------------------------------------------------------------------------------------------
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
function ReturnValues(array) {
    let values = [];
    for (const arrayElement of array) {
        for (const arrayElementKey in arrayElement) {
            values[values.length] = arrayElement[arrayElementKey];
        }
    }
    return values;
}

console.log(ReturnValues(ArrayOfObjects));


//-------------------------------------------------------------------------------------------------------------------------------
//     -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
function ArrayAndI(array, number_i) {
    if (array.length - 1 !== number_i) {
        for (let j = 0; j < array.length; j++) {
            if (j === number_i) {
                let t = array[j + 1];
                array[j + 1] = array[j];
                array[j] = t;
            }
        }
    } else {
        console.log('Фукнція ArrayAndI не спрацювала! Немає наступного єлементу массиву для зміни місцями');
    }
}

let arr = [9, 8, 0, 4];
ArrayAndI(arr, 0);
console.log(arr);


//-------------------------------------------------------------------------------------------------------------------------------
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
let last = [1, 0, 6, 0, 3, 0, 3, 0, 4, 5, 0, 2, 3, 0, 4, 0, 4, 0, 6, 0, 0, 0, 0];

function cicle(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] === 0) {
            let t = array[i + 1];
            array[i + 1] = array[i];
            array[i] = t;
        }

    }
}

function ZeroToTheEnd(array) {
    for (let j = 0; j < array.length; j++) {
        if (array[j] === 0) {
            for (let i = 0; i < array.length; i++) {
                if (array[i + 1] !== 0) {
                    cicle(array);
                }
            }
        }
    }
}

ZeroToTheEnd(last);
console.log(last);


















