import './style.css';
// import {devineLog} from './js/utility/helpers';
import {showDrinks} from './js/utility/showDrinks';
import {filterDrinks} from './js/utility/filterDrinks';
import {filterOrders} from './js/utility/filterOrders';
// import {addEvents} from './js/utility/addEvents';

import data from './assets/data/coffees.json';

// devineLog('Hey, ik ben een JS file');
// const arr = [1, 2, 3];
// const ES6Stuff = () => devineLog('Ik kan ES6 stuff aan', ...arr);
// ES6Stuff();


const orders = [
  {
    id: 1,
    aantal: 1,
    naam: 'Oat Latte',
  },
  {
    id: 2,
    aantal: 0,
    naam: 'Soy Latte',
  },
  {
    id: 3,
    aantal: 0,
    naam: 'Rice Latte',
  },
  {
    id: 4,
    aantal: 0,
    naam: 'Koko Latte',
  },
  {
    id: 5,
    aantal: 0,
    naam: 'Almond Latte',
  }
];

const LoadDrinks = () => {
  const plantDrinks = filterDrinks(data);
  console.log('plantDrinks', plantDrinks);

  showDrinks(plantDrinks);
};


const addEvents = () => {
  const buttons = document.querySelectorAll(`.price__button__plus`);
  console.log(buttons);

  buttons.forEach(button => {
    button.addEventListener('click', getId);
  });
};


const getId = e => {
  console.log('drink added');

  const drinkId = e.target.parentElement.parentElement.dataset.id;

  console.log(drinkId);



  showOrder();
};

const showOrder = () => {

  const orderslist = orders.filter(filterOrders);

  const $orders = document.querySelector('.orders');

  orderslist.forEach(order => {

    $orders.innerHTML +=
      `<li class="order">
      <span class="order__name">
        <span class="order__amount">${order.aantal}x </span>
        ${order.naam}
      </span>
      <span>
        <span class="order__price">&euro;3,50</span>
        <button class="remove">x</button>
      </span>
    </li>`;
  });
};



{
  const init = () => {

    LoadDrinks();

    addEvents();

  };
  init();
}
