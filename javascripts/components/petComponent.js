import {pets} from '../data/petData.js'

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};

const showAnimals = () => {
    let domString = ''
    for(let i=0; i<pets.length; i++){
        domString += `<div class="card text-center">`
        domString +=    `<div class="card-header">${pets[i].name}</div>`
        domString +=    `<div class="card-body">`
        domString +=        `<img class="card-img-top" src="${pets[i].imageUrl}" alt="${pets[i].name}">`
        domString +=        `<h5 class="card-title">${pets[i].color}</h5>`
        domString +=        `<p class="card-text">${pets[i].specialSkill}</p>`
        domString +=    `</div>`
        domString +=    `<div class="card-footer text-muted">${pets[i].type}</div>`
        domString += `</div>`
    };
    printToDom(domString,'printDiv');
};

export {showAnimals}