import RestaurantDataSource from '../data/data-source';

const handleSearchResults = async (searchValue) => {
  if (searchValue) {
    const restaurants = await RestaurantDataSource.restaurantSearchResult(searchValue);
    return restaurants;
  }

  const restaurants = await RestaurantDataSource.allRestaurants();
  return restaurants;
};

export default handleSearchResults;
