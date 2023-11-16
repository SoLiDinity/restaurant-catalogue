import RestaurantDataSource from '../data/data-source';

const ReviewFormInitiator = {
  init({
    id, name, review,
  }) {
    this._sendPostRequest(id, name, review);
  },

  _sendPostRequest(idValue, nameValue, reviewValue) {
    const reviewObjectValue = {
      id: idValue,
      name: nameValue,
      review: reviewValue,
    };
    RestaurantDataSource.giveRestaurantReview(reviewObjectValue);
  },
};

export default ReviewFormInitiator;
