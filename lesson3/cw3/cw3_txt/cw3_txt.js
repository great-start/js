
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
//     4. перебрати циклом for та вивести  числа тільки з непарним індексом
//     5. перебрати циклом while та вивести  числа тільки парні  значення
//     6. перебрати циклом for та вивести  числа тільки парні  значення
//     7. замінити кожне число кратне 3 на слово "okten"
//     8. вивести масив в зворотньому порядку.
//     9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
i = 0;
while (i < arr.length) {                       // 1.
    console.log(arr[i]);
    i++;
}

for (let i = 0; i < arr.length; i++) {          // 2.
    console.log(arr[i]);
}

i = 0;
while (i < arr.length) {                        // 3.
    if (i % 2) {
        console.log(arr[i]);
    }
    i++;
}

for (let i = 0; i < arr.length; i++) {           // 4.
    if (i % 2) {
        console.log(arr[i]);
    }
}

i = 0;
while (i < arr.length) {                         // 5.
    if (!(arr[i] % 2)) {
        console.log(arr[i]);
    }
    i++;
}

for (let i of arr) {                             // 6.
    if (!(i % 2)) {
        console.log(i);
    }
}

for (let j = 0; j < arr.length; j++) {           // 7.
    if (!(arr[j] % 3)) {
        arr[j] = 'okten';
    }
}

let arr2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let j = arr2.length - 1; j >= 0; j--) {               // 8.
    console.log(arr2[j]);
}


//------------------------------------------------------------------------------------------------------------------------
// 9 завдання

for (let j = arr2.length - 1; j >= 0; j--) {         // 7. - зворотне
    if (!(arr2[j] % 3)) {
        arr2[j] = 'okten';
    }
}

let arr3 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let i = arr3.length - 1; i >= 0; i--) {                  // 6. - зворотне
    if (!(arr3[i] % 2)) {
        console.log(arr3[i]);
    }
}

i = arr3.length - 1;
while (i >= 0) {                                             // 5. - зворотне
    if (!(arr3[i] % 2)) {
        console.log(arr3[i]);
    }
    i--;
}

for (let i = arr3.length - 1; i >= 0; i--) {                  // 4. - зворотне
    if (i % 2) {
        console.log(arr3[i]);
    }
}

i = arr3.length - 1;
while (i >= 0) {                                              // 3. - зворотне
    if (i % 2) {
        console.log(arr3[i]);
    }
    i--;
}

for (let i = arr3.length - 1; i >= 0; i--) {                  // 2. - зворотне
    console.log(arr3[i]);
}

i = arr3.length - 1;
while (i >= 0) {                                                // 1. - зворотне
    console.log(arr3[i]);
    i--;
}