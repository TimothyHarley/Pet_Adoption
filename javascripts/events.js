import { showAnimals } from './components/petComponent.js';
import { pets } from './data/petData.js';

const sortPets = (e) => {
    const type = e.target.id;
    if(type === 'all'){
        showAnimals(pets);
    } else {
        const filterPets = pets.filter(x => x.type === type);
        showAnimals(filterPets);
    };
};

const sortEvents = () => {
    const allButton = document.getElementById('all');
    const dogButton = document.getElementById('dog');
    const catButton = document.getElementById('cat');
    const dinoButton = document.getElementById('dino');
    allButton.addEventListener('click', sortPets);
    dogButton.addEventListener('click', sortPets);
    catButton.addEventListener('click', sortPets);
    dinoButton.addEventListener('click', sortPets);
};

export {sortEvents}