function getFilmsDataKey(movieTitle, page) {
  const titleKeyName = movieTitle.split('%20').join('_');
  return `${titleKeyName}_${page}`;
}

export function saveFilmsDataOnLocalStorage(movieTitle, page, filmsData) {
  if (movieTitle === undefined || page === undefined || typeof filmsData !== 'object') {
    throw new Error(
      'Must have a movie title, a page and a films data object to correctly save it on local storage'
    );
  }

  localStorage.setItem(getFilmsDataKey(movieTitle, page), JSON.stringify(filmsData));
}

export function loadFilmsDataFromLocalStorage(movieTitle, page) {
  const filmsData = JSON.parse(localStorage.getItem(getFilmsDataKey(movieTitle, page)));
  if (filmsData === null) {
    throw new Error(`${getFilmsDataKey(movieTitle, page)} not found on local storage`);
  }
  return filmsData;
}
