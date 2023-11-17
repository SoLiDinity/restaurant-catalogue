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
    const restaurantsContainerElement = document.querySelector('#restaurants');
    const searchButtonElement = document.querySelector('#searchButtonElement');
    const searchInputElement = document.querySelector('#searchElement');
    const skipNavLink = document.querySelector('.skip-nav');
    const toMainButton = document.querySelector('.explore-btn');

    renderRestaurantList(await handleSearchResults(), restaurantsContainerElement);

    SearchPerformer({
      searchButton: searchButtonElement,
      searchInput: searchInputElement,
      resultsCallback: async (searchValue) => {
        renderRestaurantList(await handleSearchResults(searchValue), restaurantsContainerElement);
      },
    });

    skipNavLink.addEventListener('click', (event) => {
      event.preventDefault();

      const restaurantItemElement = document.querySelector('.restaurant-item');
      restaurantItemElement.focus();
      restaurantsContainerElement.scrollIntoView({ behavior: 'smooth' });
    });

    toMainButton.addEventListener('click', (event) => {
      event.preventDefault();

      const restaurantItemElement = document.querySelector('.restaurant-item');
      restaurantItemElement.focus();
      restaurantsContainerElement.scrollIntoView({ behavior: 'smooth' });
    });
  },
};

export default Main;
