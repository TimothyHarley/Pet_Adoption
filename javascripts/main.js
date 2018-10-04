import {printPets, pets} from './data/petData.js';
import { showAnimals } from './components/petComponent.js';

const initApp = () => {
    printPets();
    showAnimals();
    console.log (pets)
};

initApp();