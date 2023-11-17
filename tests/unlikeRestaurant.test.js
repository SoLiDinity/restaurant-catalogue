import FavoriteRestaurantdb from '../src/scripts/data/favorite-restaurant-idb';
import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';

describe('Unliking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantdb.deleteRestaurant(1);
  });

  it('should display unlike button when the restaurant has been liked', async () => {
    await LikeButtonInitiator.init({
      LikeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="batal simpan restoran"]')).toBeTruthy();
  });

  it('should not display like button when the restaurant has been liked', async () => {
    await LikeButtonInitiator.init({
      LikeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="simpan restoran"]')).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await LikeButtonInitiator.init({
      LikeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    document.querySelector('[aria-label="batal simpan restoran"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantdb.getAllRestaurant()).toEqual([]);
  });

  it('should not throw error when user click unlike button if the unliked restaurant is not in the list', async () => {
    await LikeButtonInitiator.init({
      LikeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    await FavoriteRestaurantdb.deleteRestaurant(1);

    document.querySelector('[aria-label="batal simpan restoran"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantdb.getAllRestaurant()).toEqual([]);
  });
});
