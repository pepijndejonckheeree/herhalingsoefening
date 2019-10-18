import './style.css';
import {devineLog} from './js/utility/helpers';

import data from './assets/data/coffees.json';

devineLog('Hey, ik ben een JS file');
const arr = [1, 2, 3];

const ES6Stuff = () => devineLog('Ik kan ES6 stuff aan', ...arr);
ES6Stuff();

const isPlant = value => {
  return value.plantbased === true;
};

const filterDrinks = () => {

  const drinks = data.coffees;
  console.log(drinks);

  const plantdrinks = drinks.filter(isPlant);

  console.log(plantdrinks);

  loadDrinks(plantdrinks);
};

const loadDrinks = plantdrinks => {
  const listDrinks = document.querySelector('.prices__list');
  console.log(`listDrinks`, listDrinks);

  plantdrinks.forEach(drink => {

    console.log(drink.name);

    listDrinks.innerHTML += `
    <li class="price" data-id="${drink.id}">
      <a class="price__button">
        <span class="price__button__wrapper">
          <span class="price__button__name">${drink.name}</span>
          <span class="price__button__amount">&euro; ${drink.prices.medium}</span>
        </span>
        <span class="price__button__plus">+</span>
      </a>
    </li >`;
  });
};

{
  const init = () => {
    filterDrinks();
  };
  init();
}
