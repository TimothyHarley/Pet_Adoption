import {pets} from '../data/petData.js'

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};

const showAnimals = (petArray) => {
    let domString = ''
    petArray.forEach((pet) => {
        domString += `<div class="card col-3 m-3 text-center">`
        domString +=    `<div class="card-header"><h2>${pet.name}<h2></div>`
        domString +=    `<div class="card-body">`
        domString +=        `<img class="card-img-top img-thumbnail" src="${pet.imageUrl}" alt="${pet.name}">`
        domString +=        `<h5 class="card-title">${pet.color}</h5>`
        domString +=        `<p class="card-text">${pet.specialSkill}</p>`
        domString +=    `</div>`
        domString +=    `<div class="card-footer text-muted footer">${pet.type}</div>`
        domString += `</div>`
    })
    printToDom(domString,'printDiv');
};

const typeColor = () => {
    const footer = document.getElementsByClassName('footer');
    for (let i=0; i < footer.length; i++){
        const element = footer[i];
        if(element.innerHTML === 'dog'){
            element.parentNode.classList.add('bg-primary')
        } else {element.parentNode.classList.add('bg-warning') 
        }
    }
};

export {showAnimals, typeColor}