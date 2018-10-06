import {pets} from '../data/petData.js'

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};

const showAnimals = (petArray) => {
    let domString = ''
    // for(let i=0; i<pets.length; i++){
    petArray.forEach((pet) => {
        domString += `<div class="card text-center">`
        domString +=    `<div class="card-header"><h2>${pet.name}<h2></div>`
        domString +=    `<div class="card-body">`
        domString +=        `<img class="card-img-top" src="${pet.imageUrl}" alt="${pet.name}">`
        domString +=        `<h5 class="card-title">${pet.color}</h5>`
        domString +=        `<p class="card-text">${pet.specialSkill}</p>`
        domString +=    `</div>`
        domString +=    `<div class="card-footer text-muted">${pet.type}</div>`
        domString += `</div>`
    })
    printToDom(domString,'printDiv');
};

export {showAnimals}