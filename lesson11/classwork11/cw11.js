
// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// localStorage.clear();

const usersWrapDiv = document.createElement('div');
usersWrapDiv.classList.add('divUsers');
users.forEach(user => {
    const userDiv = document.createElement('div');
    for (const userKey in user) {
        const pData = document.createElement('p');
        pData.innerText = `${userKey}: ${user[userKey]}`;
        userDiv.append(pData);
    }

    const divUserButton = document.createElement('button');
    divUserButton.innerText = 'Add to favorites';
    divUserButton.onclick = function () {
        const favourites = JSON.parse(localStorage.getItem('favorites')) || [];
        favourites.push(user);
        localStorage.setItem('favorites', JSON.stringify(favourites));
    }

    usersWrapDiv.append(userDiv);
    userDiv.append(divUserButton);
})

document.body.append(usersWrapDiv);




//----------------------------------------------------------------------------------------------------------------------------------------------------
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
document.write('<hr>');
const pageOfFavorites = document.createElement('button');
pageOfFavorites.innerText = 'To page of favorites';
document.body.append(pageOfFavorites);

pageOfFavorites.onclick = () => {
    location.href = location.origin + '/js/lesson11/classwork11/favorites.html';
}





















