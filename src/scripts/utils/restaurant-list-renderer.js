import { createRestaurantCardTemplate, createErrorMessageTemplate } from '../views/templates/template-creator';

const renderRestaurantList = (restaurants, restaurantsContainer) => {
  if (typeof restaurants === 'object' && restaurants.length) {
    restaurantsContainer.innerHTML = '';
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantCardTemplate(restaurant);
    });
  } else {
    restaurantsContainer.innerHTML = '';
    restaurantsContainer.innerHTML += createErrorMessageTemplate('0 Hasil pencarian');
  }
};

export default renderRestaurantList;
