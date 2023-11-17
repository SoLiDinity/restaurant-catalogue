import FavoriteRestaurantdb from '../../data/favorite-restaurant-idb';
import { createRestaurantCardTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <a class="skip-nav" href="#/favorite/#mainContent" tabindex="1"> Skip Navigasi </a>
    
    <section class="main-content" id="mainContent">
        <h1 class="fav-header">Restoran Favorit</h1>
        <div id="restaurants" class="restaurants"></div>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantdb.getAllRestaurant();
    const restaurantsContainerElement = document.querySelector('#restaurants');
    const skipNavLink = document.querySelector('.skip-nav');

    skipNavLink.addEventListener('click', (event) => {
      event.preventDefault();

      const restaurantItemElement = document.querySelector('.restaurant-item');
      restaurantItemElement.focus();
      restaurantsContainerElement.scrollIntoView({ behavior: 'smooth' });
    });

    restaurants.forEach((restaurant) => {
      restaurantsContainerElement.innerHTML += createRestaurantCardTemplate(restaurant);
    });
  },
};

export default Favorite;
