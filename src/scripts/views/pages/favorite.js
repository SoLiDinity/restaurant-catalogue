import FavoriteRestaurantdb from '../../data/favorite-restaurant-idb';
import { createRestaurantCardTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <section class="main-content" id="mainContent">
        <h1 class="fav-header">Restoran Favorit</h1>
        <div id="restaurants" class="restaurants"></div>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantdb.getAllRestaurant();
    const restaurantsContainerElement = document.querySelector('#restaurants');

    restaurants.forEach((restaurant) => {
      restaurantsContainerElement.innerHTML += createRestaurantCardTemplate(restaurant);
    });
  },
};

export default Favorite;
