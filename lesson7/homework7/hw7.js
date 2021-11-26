// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let Users = [];
Users.push(new User(1, 'Petya', 'Pupkin', 'qwe@gmail.com', 1234567890));
Users.push(new User(2, 'Tolya', 'Pupkin', 'qwe@gmail.com', 1234567890));
Users.push(new User(3, 'Tanya', 'Pupkin', 'qwe@gmail.com', 1234567890));
Users.push(new User(4, 'Fedya', 'Pupkin', 'qwe@gmail.com', 1234567890));
Users.push(new User(5, 'Sanya', 'Pupkin', 'qwe@gmail.com', 1234567890));
(function () {
    for (let i = 5; i < 10; i++) {
        Users.push(new User(i + 1, 'Fedya', 'Pupkin', 'qwe@gmail.com', 1234567890));
    }
}());
console.log(Users);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filter = (Users) => Users.filter(Users => !(Users.id % 2));
console.log(filter(Users));


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let cloneUsers = Users;
let sort = () => cloneUsers.sort((a, b) => a.id - b.id);
console.log(sort(cloneUsers));


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [];
let client1 = new Client(1, 'Alena', 'Petrova', 'qwe@ukr.net', 123456789, ['notebook', 'smartphone', 'tablet']);
clients.push(new Client(2, 'Alena', 'Petrova', 'qwe@ukr.net', 123456789, ['notebook', 'tablet']));
clients.push(new Client(3, 'Fedya', 'Petrova', 'asd@gmail.com', 654987321, ['washing machine']));
clients.push(new Client(5, 'Tolya', 'Petrov', "vsfwef@i.ua", 556622, ['pc', 'clock', 'mouse', 'TV', 'microwave oven', 'piano', 'camera', 'table']));
clients.push(new Client(10, 'Petya', 'Petrov', 'ccccccc@gmail.com', 55555555555, ['smartclock', 'tie']));
clients.push(new Client(7, 'Sanya', 'Petrov', 'yyyyyy@asd.com', 9999999999, ['tablet', 'knife', 'pen', 'chair']));
clients.push(new Client(8, 'Vanya', 'Petrova', 'qwe@ukr.net', 123456789, ['notebook', 'smartphone', 'tablet', 'box', 'tennis']));
clients.push(new Client(4, 'Alena', 'Petrova', 'qwe@ukr.net', 123456789, ['smartphone', 'tablet']));
clients.push(new Client(11, 'Alena', 'Petrova', 'qwe@ukr.net', 123456789, ['notebook', 'smartphone', 'tablet', 'piano', 'camera', 'table']));
clients.push(new Client(20, 'Alena', 'Petrova', 'qwe@ukr.net', 123456789, ['notebook', 'smartphone', 'tablet', 'pen', 'chair']));
clients.push(new Client(15, 'Olya', 'Petrova', 'qwe@ukr.net', 123456789, ['notebook', 'smartphone', 'pen', 'chair']));
console.log(clients);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
(function () {
    clients.sort((a, b) => a.order.length - b.order.length);
}());
console.log(clients);


