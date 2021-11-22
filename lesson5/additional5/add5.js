

// - Дано натуральное число n. Выведите все числа от 1 до n.
let NaturalNumbers = limit_n => {
    for (let i = 1; i <= limit_n; i++) {
        console.log(i);
    }
};
NaturalNumbers(55);


(function (limit_n) {
    for (let i = 1; i <= limit_n; i++) {
        console.log(i);
    }
}(55));


// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
let between_A_and_B = (a, b) => {
    if (a < b) {
        for (let i = a; i <= b; i++) {
            console.log(i);
        }
    } else if (a > b) {
        for (let i = a; i >= b; i--) {
            console.log(i);
        }
    } else {
        console.log('числа рівні');
    }
};
between_A_and_B(1, 10);


(function (a, b) {
    if (a < b) {
        for (let i = a; i <= b; i++) {
            console.log(i);
        }
    } else if (a > b) {
        for (let i = a; i >= b; i--) {
            console.log(i);
        }
    } else {
        console.log('числа рівні');
    }
}(10,1));
