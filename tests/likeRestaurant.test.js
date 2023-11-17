import FavoriteRestaurantdb from '../src/scripts/data/favorite-restaurant-idb';
import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await LikeButtonInitiator.init({
      LikeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="simpan restoran"]')).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await LikeButtonInitiator.init({
      LikeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="batal simpan restoran"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await LikeButtonInitiator.init({
      LikeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    const restaurant = await FavoriteRestaurantdb.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });

    await FavoriteRestaurantdb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await LikeButtonInitiator.init({
      LikeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    await FavoriteRestaurantdb.putRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantdb.getAllRestaurant()).toEqual([{ id: 1 }]);

    await FavoriteRestaurantdb.deleteRestaurant(1);
  });

  it('should not add a restaurant when it had no id', async () => {
    await LikeButtonInitiator.init({
      LikeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {},
    });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantdb.getAllRestaurant()).toEqual([]);
  });
});
