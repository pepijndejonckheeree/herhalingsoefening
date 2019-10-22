// import data from '../../assets/data/coffees.json';

export const filterDrinks = data => {
  // console.log('data', data);

  const drinks = data.coffees;

  const plantdrinks = drinks.filter(isPlant);
  // console.log('plantdrinks', plantdrinks);

  return plantdrinks;
};

const isPlant = value => {
  return value.plantbased === true;
};
