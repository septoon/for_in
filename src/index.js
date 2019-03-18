/* eslint-disable no-console */
import filterObject from './js/app';

const characters = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};
const answer = filterObject(characters, ['name', 'health']);
console.log(answer);
