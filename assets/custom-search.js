document.addEventListener('DOMContentLoaded', function () {

  const searchModalDetails = document.querySelector('.header__icons .header__search details');
  const searchInput = document.querySelector('.header__icons .search__input');
  const predictiveSearchContainer = document.querySelector('[data-predictive-search]');
  const recommendedSearch = document.querySelector('.header__icons .recommended-search');

  if (!searchModalDetails || !searchInput || !predictiveSearchContainer || !recommendedSearch) {
    return;
  }

  function showRecommended() {
    recommendedSearch.style.display = 'block';
    predictiveSearchContainer.style.display = 'none';
    searchInput.setAttribute('aria-expanded', 'true');
  }

  function showPredictive() {
    predictiveSearchContainer.style.display = 'block';
    recommendedSearch.style.display = 'none';
    searchInput.setAttribute('aria-expanded', 'true');
  }

  function hideAll() {
    recommendedSearch.style.display = 'none';
    predictiveSearchContainer.style.display = 'none';
    searchInput.setAttribute('aria-expanded', 'false');
  }

  searchModalDetails.addEventListener('toggle', function () {
    if (searchModalDetails.open) {
      searchInput.focus();
      if (searchInput.value.trim() === '') {
        showRecommended();
      }
    } else {
      hideAll();
    }
  });

  searchInput.addEventListener('focus', function () {
    if (searchModalDetails.open && searchInput.value.trim() === '') {
      showRecommended();
    }
  });

  searchInput.addEventListener('input', function () {
    if (searchInput.value.trim() === '') {
      showRecommended();
    } else {
      showPredictive();
    }
  });

  searchInput.addEventListener('blur', function () {
    setTimeout(hideAll, 200);
  });
});
