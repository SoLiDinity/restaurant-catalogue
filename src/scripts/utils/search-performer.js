const SearchPerformer = ({ searchButton, searchInput, resultsCallback }) => {
  searchButton.addEventListener('click', () => {
    resultsCallback(searchInput.value);
  });
};

export default SearchPerformer;
