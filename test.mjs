import {calculate, Generations, Pokemon, Move} from '@smogon/calc';

const gen = Generations.get(9); // alternatively: const gen = 5;

const result = calculate(
  gen,
  new Pokemon(gen, 'Farigiraf', {
    item: 'Sitrus Berry',
    level: 50,
    nature: 'Docile',
    evs: {hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0},
    boosts: {spa: 1},
  }),
  new Pokemon(gen, 'Calyrex-Shadow', {
    item: 'Sitrus Berry',
    level: 50,
    nature: 'Docile',
    evs: {hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0},
    boosts: 0,
  }),
  new Move(gen, 'Helping Hand`'),
);
//
console.log(result); // 74.6 - 87.8%
// Save json
import fs from 'fs';
fs.writeFileSync('result.json', JSON.stringify(result));