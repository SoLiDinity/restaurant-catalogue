import API_ENDPOINT from '../globals/api-endpoint';
import OPTIONS from '../globals/request-options';
import CustomAlert from '../utils/custom-alert-initiator';
import Loader from '../utils/loader-performer';

class RestaurantDataSource {
  static async allRestaurants() {
    Loader.performLoader();
    try {
      const response = await fetch(API_ENDPOINT.ALL_RESTAURANTS, OPTIONS.method('GET'));
      const responseJson = await response.json();

      Loader.finishLoader();

      return responseJson.restaurants;
    } catch (error) {
      Loader.finishLoader();

      CustomAlert.init({
        message: `Gagal! (error: ${error.message}, pastikan anda terkoneksi ke internet)`,
        backgroundColor: 'red',
      });

      return `${error.message}, pastikan anda terkoneksi ke internet`;
    }
  }

  static async detailRestaurant(id) {
    Loader.performLoader();
    try {
      const response = await fetch(API_ENDPOINT.RESTAURANT_DETAIL(id), OPTIONS.method('GET'));
      const responseJson = await response.json();

      setTimeout(() => {
        Loader.finishLoader();
      }, 500);

      return responseJson.restaurant;
    } catch (error) {
      Loader.finishLoader();

      CustomAlert.init({
        message: `Gagal! (error: ${error.message}, pastikan anda terkoneksi ke internet)`,
        backgroundColor: 'red',
      });

      return `${error.message}, pastikan anda terkoneksi ke internet`;
    }
  }

  static async restaurantSearchResult(value) {
    Loader.performLoader();
    try {
      const response = await fetch(API_ENDPOINT.RESTAURANT_SEARCH_RESULT(value), OPTIONS.method('GET'));
      const responseJson = await response.json();

      Loader.finishLoader();

      return responseJson.restaurants;
    } catch (error) {
      Loader.finishLoader();

      CustomAlert.init({
        message: `Gagal! (error: ${error.message}, pastikan anda terkoneksi ke internet)`,
        backgroundColor: 'red',
      });

      return `${error.message}, pastikan anda terkoneksi ke internet`;
    }
  }

  static async giveRestaurantReview(review) {
    Loader.performLoader();
    try {
      const response = await fetch(API_ENDPOINT.GIVE_RESTAURANT_REVIEW, {
        ...OPTIONS.method('POST'),
        ...OPTIONS.headers('application/json'),
        ...OPTIONS.body(review),
      });
      const responseJson = await response.json();
      const message = await responseJson.message;

      Loader.finishLoader();

      CustomAlert.init({
        message: 'Ulasan berhasil terkirim!',
        backgroundColor: 'green',
      });

      return message;
    } catch (error) {
      Loader.finishLoader();

      CustomAlert.init({
        message: `Gagal! (error: ${error.message}, pastikan anda terkoneksi ke internet)`,
        backgroundColor: 'red',
      });

      return `${error.message}, pastikan anda terkoneksi ke internet`;
    }
  }
}

export default RestaurantDataSource;

import API_ENDPOINT from '../globals/api-endpoint';
import OPTIONS from '../globals/request-options';
import CustomAlert from '../utils/custom-alert-initiator';
import Loader from '../utils/loader-performer';

class RestaurantDataSource {
  static async allRestaurants() {
    Loader.performLoader();
    try {
      const response = await fetch(API_ENDPOINT.ALL_RESTAURANTS, OPTIONS.method('GET'));
      const responseJson = await response.json();

      Loader.finishLoader();

      return responseJson.restaurants;
    } catch (error) {
      Loader.finishLoader();

      CustomAlert.init({
        message: `Gagal! (error: ${error.message}, pastikan anda terkoneksi ke internet)`,
        backgroundColor: 'red',
      });

      return `${error.message}, pastikan anda terkoneksi ke internet`;
    }
  }

  static async detailRestaurant(id) {
    Loader.performLoader();
    try {
      const response = await fetch(API_ENDPOINT.RESTAURANT_DETAIL(id), OPTIONS.method('GET'));
      const responseJson = await response.json();

      setTimeout(() => {
        Loader.finishLoader();
      }, 500);

      return responseJson.restaurant;
    } catch (error) {
      Loader.finishLoader();

      CustomAlert.init({
        message: `Gagal! (error: ${error.message}, pastikan anda terkoneksi ke internet)`,
        backgroundColor: 'red',
      });

      return `${error.message}, pastikan anda terkoneksi ke internet`;
    }
  }

  static async restaurantSearchResult(value) {
    Loader.performLoader();
    try {
      const response = await fetch(API_ENDPOINT.RESTAURANT_SEARCH_RESULT(value), OPTIONS.method('GET'));
      const responseJson = await response.json();

      Loader.finishLoader();

      return responseJson.restaurants;
    } catch (error) {
      Loader.finishLoader();

      CustomAlert.init({
        message: `Gagal! (error: ${error.message}, pastikan anda terkoneksi ke internet)`,
        backgroundColor: 'red',
      });

      return `${error.message}, pastikan anda terkoneksi ke internet`;
    }
  }

  static async giveRestaurantReview(review) {
    Loader.performLoader();
    try {
      const response = await fetch(API_ENDPOINT.GIVE_RESTAURANT_REVIEW, {
        ...OPTIONS.method('POST'),
        ...OPTIONS.headers('application/json'),
        ...OPTIONS.body(review),
      });
      const responseJson = await response.json();
      const message = await responseJson.message;

      Loader.finishLoader();

      CustomAlert.init({
        message: 'Ulasan berhasil terkirim!',
        backgroundColor: 'green',
      });

      return message;
    } catch (error) {
      Loader.finishLoader();

      CustomAlert.init({
        message: `Gagal! (error: ${error.message}, pastikan anda terkoneksi ke internet)`,
        backgroundColor: 'red',
      });

      return `${error.message}, pastikan anda terkoneksi ke internet`;
    }
  }
}

export default RestaurantDataSource;
