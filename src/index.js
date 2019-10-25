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

  const $emptystate = document.querySelector('.emptystate');
  if ($emptystate) {
    $emptystate.remove();
  }

  const $total = document.querySelector(`.total`);

  if ($total) {
    console.log('total');
  } else {
    showTotal();
  }

  const $orders = document.querySelector('.orders');

  orderslist.forEach(order => {

    const $li = document.createElement('li');
    $li.classList.add('order');
    $orders.appendChild($li);

    const $spanName = document.createElement('span');
    $spanName.classList.add('order__name');
    $spanName.innerHTML = `<span class="order__amount">${order.aantal}x </span>${order.naam}`;
    $li.appendChild($spanName);

    // const $spanAmount = document.createElement('span');
    // $spanAmount.classList.add('order__amount');
    // $spanAmount.textContent = ``;
    // $spanName.appendChild($spanAmount);

    const $spanWrapper = document.createElement('span');
    $li.appendChild($spanWrapper);

    const $spanPrice = document.createElement('span');
    $spanPrice.classList.add('order__price');
    $spanPrice.textContent = ` € 3,50`;
    $spanWrapper.appendChild($spanPrice);

    const $button = document.createElement('button');
    $button.classList.add('remove');
    $button.textContent = 'x';
    $button.addEventListener('click', handleClose);
    $spanWrapper.appendChild($button);
  });
};

const showTotal = () => {

  const $ordersWrapper = document.querySelector(`.orders__wrapper`);

  const $p = document.createElement('p');
  $p.classList.add('total');
  $ordersWrapper.appendChild($p);

  const $spanLabel = document.createElement('span');
  $spanLabel.classList.add('total__label');
  $spanLabel.textContent = 'Total price';
  $p.appendChild($spanLabel);

  const $spanPrice = document.createElement('span');
  $spanPrice.classList.add('total__price');
  $spanPrice.innerHTML = '&euro;';
  $p.appendChild($spanPrice);

  const $span = document.createElement('span');
  $span.textContent = '0,00';
  $spanPrice.appendChild($span);
};

const handleClose = e => {
  const $button = e.currentTarget;
  const deleteOrder = $button.parentElement.parentElement;
  console.log(deleteOrder);
  deleteOrder.remove();

};


{
  const init = () => {

    LoadDrinks();

    addEvents();

  };
  init();
}
