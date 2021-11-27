

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function CarConstructor(model, manufacturer, year, maxSpeed, engine) {
    this.model = model;
    this.manufacrurer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
}

let newCar = new CarConstructor('supercar', 'Porshe', 2020, 320, 4.5);


// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
newCar.drive = function () {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
}


// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
newCar.info = function () {
    for (const newCarKey in newCar) {
        if (typeof newCar[newCarKey] !== 'function') {
            console.log(`${newCarKey} - ${newCar[newCarKey]}`);
        }
    }
};
newCar.info();


// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
newCar.increaseMaxSPeed = function (newSpeed) {
    this.maxSpeed += newSpeed;
}
newCar.increaseMaxSPeed(100);
console.log(newCar.maxSpeed);


// -- changeYear (newValue) - змінює рік випуску на значення newValue
newCar.changeYear = function (newValue) {
    this.year = newValue;
}
newCar.changeYear(1960);
newCar.info();


// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
newCar.addDriver = function (driverName, driverAge, driverLicense) {
    this.driver = {
        driverName: driverName,
        driverAge: driverAge,
        driverLicense: driverLicense,
    }
};
newCar.addDriver('Vanya',36,'B');






// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

class CarConstruct {
    constructor(model, manufacturer, year, maxSpeed, engine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }
}

let car = new CarConstruct('hatchback', 'Honda', 2010, 220, 3);
console.log(car);


// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
car.drive = function () {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
}
car.drive();


// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
car.info = function () {
    for (const carKey in car) {
        if (typeof car[carKey] !== 'function') {
            console.log(`${carKey} - ${car[carKey]}`);
        }
    }
}
car.info();


// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
car.increaseMaxSpeed = function (newSpeed) {
    this.maxSpeed += newSpeed;
}
car.increaseMaxSpeed(150);
car.info();


// -- changeYear (newValue) - змінює рік випуску на значення newValue
car.changeYear = function (newValue) {
    this.year = newValue;
}
car.changeYear(2005);
console.log(car.year);


// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
car.addDriver = function (driver) {
    this.driver = driver;
}
car.addDriver({name: 'Petya', age: 40, license: 'A,B'});
console.log(car);






// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class CreateCinderella {
    constructor(name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }
}
let cinderellas = [];
(function () {
    for (let i = 0; i < 10; i++) {
        cinderellas.push(new CreateCinderella(`Ally${i+1}`, 18+i, i+30));
    }
}());
console.log(cinderellas);


// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Princes {
    constructor(name, age, foundedBoot) {
        this.name = name;
        this.age = age;
        this.foundedBoot = foundedBoot;
    }
}
let prince = new Princes('Vanya', 25, 36);


//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const cinderella of cinderellas) {
    if (prince.foundedBoot === cinderella.footsize) {
        console.log(`Знайшов! Принц ${prince.name} знайшов туфельку розміру ${prince.foundedBoot}, точно такого ж розміру ${cinderella.footsize} як у попелюшки ${cinderella.name}`);
    }
}


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let find = cinderellas.find((cinderella) => prince.foundedBoot === cinderella.footsize);
console.log(find);