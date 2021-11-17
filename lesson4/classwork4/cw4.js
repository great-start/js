// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function compareMinNumber(a, b, c) {
    if (a <= b && a <= c) {
        console.log(`найменше число ${a}`);
    } else if (b <= a && b <= c) {
        console.log(`найменше число ${b}`);
    } else {
        console.log(`найменше число ${c}`);
    }
}

compareMinNumber(8, 10, 8);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function compareMaxNumber(a, b, c) {
    if (a >= b && a >= c) {
        console.log(`найбільше число ${a}`);
    } else if (b >= a && b >= c) {
        console.log(`найбільше число ${b}`);
    } else {
        console.log(`найбільше число ${c}`);
    }
}

compareMaxNumber(-52, -52, 54);


//-------------------------------------------------------------------------------------------------------------------------------
// - створити функцію яка повертає найбільше число з масиву
let numbers = [2000, 100, 5045, 3, 4, 80, 2, 34, 130, 250, 62, 49, 9, 505, 457];

function MaxOfArrayNumbers(array) {
    let check = 0;
    for (let j = 0; j < array.length; j++) {
        if (check <= array[j]) {
            check = array[j];
        }
    }
    console.log(check);
}

MaxOfArrayNumbers(numbers);

// - створити функцію яка повертає найменьше число з масиву
function MinOfArrayNumbers(array) {
    let check = 1e+1000;
    for (const arrayElement of array) {
        if (arrayElement <= check) {
            check = arrayElement;
        }
    }
    console.log(check);
}

MinOfArrayNumbers(numbers);


//--------------------------------------------------------------------------------------------------------------------------------
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function SumOfArrayElements(array) {
    let sum = array[0];
    for (let j = 1; j < array.length; j++) {
        sum += array[j];
    }
    console.log(sum);
}

SumOfArrayElements(numbers);


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function AverageOfArrayElements(array) {
    let sum = array[0];
    for (let j = 1; j < array.length; j++) {
        sum += array[j];
    }
    console.log(sum / array.length);
}

AverageOfArrayElements(numbers);


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function ReturnMinLogMax() {
    // debugger;
    let min = 1e+1000;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] <= min) {
            min = arguments[i];
        }
    }
    let max = 0;
    // debugger;
    for (i = 0; i < arguments.length; i++) {
        if (max <= arguments[i]) {
            max = arguments[i];
        }
    }
    console.log(max);
    return min;
}

ReturnMinLogMax(100, 2, 156, 4, -5, 688, 7, 89);


//-------------------------------------------------------------------------------------------------------------------------------
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let arr_numbers = [];

function AddRandomNumbersToArray(array, array_length) {
    for (let i = 0; i < array_length; i++) {
        array[i] = Math.round(Math.random() * 100);
    }
    console.log(array);
}

AddRandomNumbersToArray(arr_numbers, 50);


//-------------------------------------------------------------------------------------------------------------------------------
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let arr_numbers2 = [];

function AddRandomNumbersRange(array, array_length, limit) {
    for (let i = 0; i < array_length; i++) {
        array[i] = Math.round(Math.random() * limit);
    }
    console.log(array);
}

AddRandomNumbersRange(arr_numbers2, 20, 500);


//-------------------------------------------------------------------------------------------------------------------------------
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Reverse(array) {
    let array_reverse = [];
    for (let i = array.length - 1; i >= 0; i--) {
        array_reverse[array_reverse.length] = array[i];
    }
    return array_reverse;
}

console.log(Reverse(array));












