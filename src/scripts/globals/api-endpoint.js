import CONFIG from './config';

const API_ENDPOINT = {
  ALL_RESTAURANTS: `${CONFIG.BASE_URL}list`,
  RESTAURANT_DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  RESTAURANT_SEARCH_RESULT: (query) => `${CONFIG.BASE_URL}search?q=${query}`,
  GIVE_RESTAURANT_REVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
