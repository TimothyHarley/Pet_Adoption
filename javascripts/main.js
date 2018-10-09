import { getAnimals } from './data/petData.js';
import { sortEvents } from './events.js';

const initApp = () => {
    getAnimals();
    sortEvents();
};

initApp();