import FavoriteRestaurantdb from '../data/favorite-restaurant-idb';
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ LikeButtonContainer, restaurant }) {
    this._likeButtonContainer = LikeButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderlike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderlike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButtonElement = document.querySelector('#likeButton');
    likeButtonElement.addEventListener('click', async () => {
      await FavoriteRestaurantdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButtonElement = document.querySelector('#likeButton');
    likeButtonElement.addEventListener('click', async () => {
      await FavoriteRestaurantdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
