import renderRestaurantList from '../../utils/restaurant-list-renderer';
import SearchPerformer from '../../utils/search-performer';
import handleSearchResults from '../../utils/search-result-handler';

const Main = {
  async render() {
    return `
        <a class="skip-nav" href="/#mainContent" tabindex="1"> Skip Navigasi </a>
        <jumbotron-content></jumbotron-content>

        <section class="main-content" id="mainContent">
            <search-bar></search-bar>
            <div id="restaurants" class="restaurants"></div>
        </section>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#restaurants');
    const searchButtonElement = document.querySelector('#searchButtonElement');
    const searchInputElement = document.querySelector('#searchElement');

    renderRestaurantList(await handleSearchResults(), restaurantsContainer);

    SearchPerformer({
      searchButton: searchButtonElement,
      searchInput: searchInputElement,
      resultsCallback: async (searchValue) => {
        renderRestaurantList(await handleSearchResults(searchValue), restaurantsContainer);
      },
    });
  },
};

export default Main;
