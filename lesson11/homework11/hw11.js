
// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
const form1 = document.createElement('form');
form1.setAttribute('id','localstorage');
const inputName = document.createElement('input');
inputName.setAttribute('name', 'name');
inputName.setAttribute('type', 'text');
const inputAge = document.createElement('input');
inputAge.setAttribute('name', 'age');
inputAge.setAttribute('type', 'number');
const htmlButtonElement = document.createElement('button');
htmlButtonElement.innerText = 'Write down to Localstorage';

document.body.append(form1);
form1.append(inputName, inputAge, htmlButtonElement);

// localStorage.clear();

document.forms.localstorage.onsubmit = function (e) {
    e.preventDefault();
    const name = this.name.value;
    const age = this.age.value;
    console.log(name, age);
    localStorage.setItem(localStorage.length, JSON.stringify({name: name, age: age}));
    // localStorage.setItem(localStorage.length, JSON.stringify({name, age}));
}



//----------------------------------------------------------------------------------------------------------------------------------------------------
// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
const form2 = document.createElement('form');
form2.setAttribute('id', 'auto');
form2.style.marginTop = '50px';
const modelInput = document.createElement('input');
modelInput.setAttribute('name', 'model');
const typeInput = document.createElement('input');
typeInput.setAttribute('name', 'type');
const volumeInput = document.createElement('input');
volumeInput.setAttribute('name', 'volume');
volumeInput.setAttribute('type', 'number');
const buttonAuto = document.createElement('button');
buttonAuto.innerText = 'Save ObjectAuto ot Localstorage';

document.body.append(form2);
form2.append(modelInput, typeInput, volumeInput, buttonAuto);

const f2 = document.forms.auto;

// localStorage.clear();

f2.onsubmit = function(e)  {
    e.preventDefault();
    // const model = this.model.value;
    // const type = this.type.value;
    // const volume = this.volume.value;
    // const car = {model, type, volume};
    // if (!localStorage.getItem('cars')) {
    //     let cars = [];
    //     cars.push(car);
    //     localStorage.setItem('cars', JSON.stringify(cars));
    // } else {
    //     const cars = JSON.parse(localStorage.getItem('cars'));
    //     cars.push(car);
    //     localStorage.setItem('cars', JSON.stringify(cars));
    // }

    const car = {model: this.model.value, type: this.type.value, volume: this.volume.value};
    const cars = JSON.parse(localStorage.getItem('cars')) || [];
    cars.push(car);
    localStorage.setItem('cars', JSON.stringify(cars));

}



