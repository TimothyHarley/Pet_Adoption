import { getAnimals } from './data/petData.js';
import { sortEvents } from './events.js';
import { typeColor } from './components/petComponent.js';

const initApp = () => {
    getAnimals();
    sortEvents();
    typeColor();
};

initApp();