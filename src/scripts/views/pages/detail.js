import RestaurantDataSource from '../../data/data-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import ReviewFormInitiator from '../../utils/review-form-initiator';
import TextareaAutoAdjust from '../../utils/textarea-auto-adjust';
import {
  createRestaurantDetailTemplate,
  createErrorMessageTemplate,
} from '../templates/template-creator';

const Detail = {
  async render() {
    return `
        <section class="main-content">
            <div id="restaurant" class="restaurant"></div>
        </section>
        <div id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDataSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');

    if (typeof restaurant === 'object') {
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

      const formElement = document.querySelector('form');
      const nameInputElement = document.querySelector('#nameInput');
      const reviewInputELement = document.querySelector('#customerReview');

      reviewInputELement.addEventListener('input', () => {
        TextareaAutoAdjust(reviewInputELement);
      });

      formElement.addEventListener('submit', (event) => {
        event.preventDefault();
        ReviewFormInitiator.init({
          id: url.id,
          name: nameInputElement.value,
          review: reviewInputELement.value,
        });
      });

      LikeButtonInitiator.init({
        LikeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
          id: restaurant.id,
          pictureId: restaurant.pictureId,
          name: restaurant.name,
          rating: restaurant.rating,
          address: restaurant.address,
          city: restaurant.city,
          categories: restaurant.categories,
          description: restaurant.description,
          menus: {
            foods: restaurant.menus.foods,
            drinks: restaurant.menus.drinks,
          },
          customerReviews: restaurant.customerReviews,
        },
      });
    } else {
      restaurantContainer.innerHTML = createErrorMessageTemplate(restaurant);
    }
  },
};

export default Detail;
