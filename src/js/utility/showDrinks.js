export const showDrinks = plantDrinks => {

  const $listDrinks = document.querySelector('.prices__list');
  console.log(`listDrinks`, $listDrinks);

  plantDrinks.forEach(drink => {


    $listDrinks.innerHTML += `
    <li class="price" data-id="${drink.id}">
      <a class="price__button">
        <span class="price__button__wrapper">
          <span class="price__button__name">${drink.name}</span>
          <span class="price__button__amount">&euro; ${drink.prices.medium}</span>
        </span>
        <span class="price__button__plus">+</span>
      </a>
    </li >`;


    // const $li = document.createElement('li');
    // $li.classList.add('price');
    // $li.dataset.id === drink.id;
    // $listDrinks.appendChild('$li');

    // const $a = document.createElement('a');
    // $a.classList.add('price__button');
    // $li.appendChild('$a');

    // const $span = document.createElement('span');
    // $span.classList.add('price__button__wrapper');
    // $a.appendChild('$span');

    // const $name = document.createElement('span');
    // $name.classList.add('price__button__name');
    // $name.textContent = drink.name;
    // $span.appendChild('$name');

    // const $price = document.createElement('span');
    // $price.classList.add('price__button__amount');
    // $price.textContent = drink.prices.medium;
    // $span.appendChild('$price');

    // const $plus = document.createElement('span');
    // $plus.classList.add('price__button__plus');
    // $plus.textContent = '+';
    // $a.appendChild('$plus');





  });




};

