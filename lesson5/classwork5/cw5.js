
// Всі функції повинні бути описані стрілочним типом, та selfinvoke!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let MinOfNumbers = (a, b, c) => {
    (a <= b && a <= c) ? console.log(a) : (b <= a && b <= c) ? console.log(b) : console.log(c)
};
(function (a, b, c) {
    (a <= b && a <= c) ? console.log(a) : (b <= a && b <= c) ? console.log(b) : console.log(c);
}(5, 12, 11));
MinOfNumbers(10, 11, 12);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let MaxOfNumbers = (a, b, c) => {
    (a >= b && a >= c) ? console.log(a) : (b >= a && b >= c) ? console.log(b) : console.log(c);
};
(function (a,b,c) {
    (a >= b && a >= c) ? console.log(a) : (b >= a && b >= c) ? console.log(b) : console.log(c);
}(15,16,17));
MaxOfNumbers(20, 14, 5);


// - створити функцію яка повертає найбільше число з масиву
let MaxNumberFromArray = array => {
    let max = -1e+1000;
    for (const arrayElement of array) {
        if (max <= arrayElement) {
            max = arrayElement;
        }
    }
    return max;
};
let numbers = [1, 6, 9, -60, 44, 35, 153, 878, 55, 71, 231, 0, -13, 34];
console.log(MaxNumberFromArray(numbers));

(function (array) {
    let max = array[0];
    for (const arrayElement of array) {
        if (max <= arrayElement) {
            max = arrayElement;
        }
    }
    console.log(max);
}([1, 6, 9, 60, 44, 35, 153, 878, 55, 71, 231, 0, -13, 34]));


// - створити функцію яка повертає найменьше число з масиву
let MinNumberFromArray = array => {
    let min = 1e+1000;
    for (const arrayElement of array) {
        if (min >= arrayElement) {
            min = arrayElement;
        }
    }
    return min;
};
console.log(MinNumberFromArray(numbers));

(function (array) {
    let min = array[0];
    for (const arrayElement of array) {
        if (min >= arrayElement) {
            min = arrayElement;
        }
    }
    console.log(min);
}([1, 6, 9, 60, 44, 35, -153, 878, 55, 71, 231, 0, -13, 34]));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let SumOfElements = array => {
    let sum = array[0];
    for (const argument of array) {
        sum += argument;
    }
    return sum;
};
console.log(SumOfElements(numbers));

(function (array) {
    let sum = array[0];
    for (const argument of array) {
        sum += argument;
    }
    console.log(sum);
}(numbers));


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let AverageOfElements = array => {
    let sum = array[0];
    for (const argument of array) {
        sum += argument;
    }
    return sum / array.length;
};
console.log(AverageOfElements(numbers));

(function (array) {
    let sum = array[0];
    for (const argument of array) {
        sum += argument;
    }
    console.log(sum / array.length);
}(numbers));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let ReturnMinShowMax = (arr) => {
    let min = 1e+1000;
    let max = -1e+1000;
    for (const arrayElement of arr) {
        if (min >= arrayElement) {
            min = arrayElement;
        }
        if (max <= arrayElement) {
            max = arrayElement;
        }
    }
    console.log(max);
    return min;
}
ReturnMinShowMax([10, 12, 4, 5, 7, 9, 42, 21, 90, 100, 30, -50, -23, 0, 82, 1]);

(function (arr) {
    let min = 1e+1000;
    let max = -1e+1000;
    for (const arrayElement of arr) {
        if (min >= arrayElement) {
            min = arrayElement;
        }
        if (max <= arrayElement) {
            max = arrayElement;
        }
    }
    console.log(max);
    return min;
}([10, 12, 4, 5, 7, 15, 42, 21, 90, 100, 30, -50, -23, 0, 82, 1]));


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let AddRandoms = (arr, limit) => {
    for (let i = 0; i < limit; i++) {
        arr[arr.length] = Math.round(Math.random()*100);
    }
    return arr;
};
let teml_arr = [];
console.log(AddRandoms(teml_arr,10));

let teml_arr2 = [];
(function (arr, limit) {
    for (let i = 0; i < limit; i++) {
        arr[arr.length] = Math.round(Math.random()*100);
    }
    console.log(arr);
}(teml_arr2,10));


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let AddRandomsLimit = (arr, length, Limit) => {
    for (let i = 0; i < length; i++) {
        arr[arr.length] = Math.round(Math.random()*Limit);
    }
    return arr;
};
let teml_arr3 = [];
console.log(AddRandomsLimit(teml_arr3,10, 500));

let teml_arr4 = [];
(function (arr,length, Limit) {
    for (let i = 0; i < length; i++) {
        arr[arr.length] = Math.round(Math.random()*Limit);
    }
    console.log(arr);
}(teml_arr4,10,500));


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let ReverseArray = (array) => {
    let arr_template = [];
    for (let i = array.length - 1, j = 0; i >= 0; i--, j++) {
        arr_template[j] = array[i];
    }
    return arr_template;
};
console.log(ReverseArray(numbers));

(function (array) {
    let arr_template = [];
    for (let i = array.length - 1, j = 0; i >= 0; i--, j++) {
        arr_template[j] = array[i];
    }
    console.log(arr_template);
}(numbers));






