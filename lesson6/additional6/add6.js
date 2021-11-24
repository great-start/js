
// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
let validate = email => {
    let checkSymbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.'];
    if (email.indexOf('@') === -1) {
        console.log('немає равлика');
    } else {
        if (email[0] === '.') {
            return console.log('email заборонено починати з точки');
        } else if (email[0] === '@') {
            return console.log('email заборонено починати з @');
        } else {
            for (let i = 0; i < email.length; i++) {
                if (email[i] === '.' && email[i + 1] === '.') {
                    return console.log('заборонено використовувати дві точки підряд');
                }
            }
            let str = email.substr(0, email.search('@'));
            for (let i = 0; i < str.length; i++) {
                for (let j = 0; j < checkSymbols.length; j++) {
                    if (str[i] === checkSymbols[j]) {
                        break;
                    }
                    if (checkSymbols[j] === checkSymbols[checkSymbols.length - 1])
                        return console.log(str[i] + ' заборонений символ');
                }
            }
            let str2 = email.substr(email.search('@'));
            str2 = str2.substr(str2.indexOf('@') + 1, str2.indexOf('.') - 1);
            return str2.length >= 2 ? console.log(email + ' пройшов перевірку') : console.log('меньше двох символів після равлика');
        }
    }
};

validate('someemail@gmail.com');




// - є масив
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
let sort = arr => arr.sort((a, b) => a.modules.length - b.modules.length);

console.log(sort(coursesArray));




// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
let symb = "о", str = "Астрономия это наука о небесных объектах";
let count = (str, stringsearch) => {
    let count = 0;
    for (const strElement of str) {
        if (strElement === stringsearch) {
            count++;
        }
    }
    return count;
}

document.writeln(count(str, "о"));




// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
    let str2 = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
let cutstring = (str, number) => {
    let strArr = str.split(' ');
    let finishString = '';
    for (let i = strArr.length - 1; i >= 0; i--) {
        if (strArr.length - 1 >= number) {
            strArr.pop();
        }
    }
    for (const strArrElement of strArr) {
        finishString = finishString.concat(' ' + strArrElement);
    }
    return finishString.trim();
}

document.writeln(cutstring(str2, 5));











