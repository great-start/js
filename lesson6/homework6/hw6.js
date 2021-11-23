
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str = ['hello world', 'lorem ipsum', 'javascript is cool'];
str.forEach(value => console.log(value.length));


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
let str1Up = str1.toUpperCase();
let str2Up = str2.toUpperCase();
let str3Up = str3.toUpperCase();
console.log(str1Up, str2Up, str3Up);


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let strUp = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
let strLower = [];
strUp.forEach(element => strLower.push(element.toLowerCase()));
console.log(strLower);


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let string = ' dirty string   ';
console.log(string.trim());


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
let str4 = 'Каждый охотник желает знать';
let stringToarray = str => str.split(' ');
document.writeln(stringToarray(str4));
console.log(stringToarray(str4));


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
let str5 = 'Каждый охотник желает знать';
let delete_characters = (str, length) => str.slice(0, length);
document.writeln(delete_characters(str5, 7));


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let str6 = "HTML JavaScript PHP";
let insert_dash = str => str.replaceAll(' ', '-').toUpperCase();
document.write(insert_dash(str6));


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let str7 = "HTML JavaScript PHP";
let firstSymbolToLowerCase = str => str.replace(str.charAt(0), str.charAt(0).toLowerCase());
console.log(firstSymbolToLowerCase(str7));


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let str8 = 'hello okten, one two three. Four five seven';
let capitalize = str => {
    let words = str.split(' ');
    let result_words = '';
    for (let word of words) {
        if (words[words.length - 1] === word) {
            word = word.replace(word[0], word[0].toUpperCase());
            result_words = result_words.concat(word);
        } else {
            word = word.replace(word[0], word[0].toUpperCase());
            result_words = result_words.concat(word + ' ');
        }
    }
    return result_words;
};

console.log(capitalize(str8));





