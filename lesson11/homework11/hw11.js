
// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
const form1 = document.createElement('form');
form1.setAttribute('id','localstorage');
const inputName = document.createElement('input');
inputName.setAttribute('name', 'name');
const inputAge = document.createElement('input');
inputAge.setAttribute('name', 'age');
const htmlButtonElement = document.createElement('button');
htmlButtonElement.innerText = 'Write down to Localstorage';

document.body.append(form1);
form1.append(inputName, inputAge, htmlButtonElement);

document.forms.localstorage.onsubmit = function (e) {
    e.preventDefault();
    localStorage.setItem(inputName.value, inputAge.value);
    console.log(inputName.value, inputAge.value);
}



//----------------------------------------------------------------------------------------------------------------------------------------------------
// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
const form2 = document.createElement('form');
form2.setAttribute('id', 'auto');
form2.style.marginTop = '50px';
const model = document.createElement('input');
model.setAttribute('name', 'model');
const type = document.createElement('input');
type.setAttribute('name', 'type');
const volume = document.createElement('input');
volume.setAttribute('name', 'volume');
const buttonAuto = document.createElement('button');
buttonAuto.innerText = 'Save ObjectAuto ot Localstorage';

document.body.append(form2);
form2.append(model, type, volume, buttonAuto);

document.forms.auto.addEventListener('submit', function (e) {
    e.preventDefault();
    let item = {'model': model.value, 'type': type.value, 'volume': volume.value};
    localStorage.setItem('auto', JSON.stringify(item));
})



