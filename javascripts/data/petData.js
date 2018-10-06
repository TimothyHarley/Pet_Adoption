import { showAnimals } from "../components/petComponent.js";


let pets = [];

const setPets = (newArray) => {
    pets = newArray;
};

const getPets = () => {
    return pets;
};

function executeAfterLoad () {
    const data = JSON.parse(this.responseText);
    setPets(data.pets);
    showAnimals(getPets());
};

function executeIfXhrFails () {
    console.log('(╯°□°）╯︵ ɹɥx')
}

const getAnimals = () => {
    let myRequest = new XMLHttpRequest ();
    myRequest.addEventListener('load', executeAfterLoad);
    myRequest.addEventListener('fail', executeIfXhrFails);
    myRequest.open('GET', './db/pets.json');
    myRequest.send();
};




export {getAnimals, pets, getPets, setPets}