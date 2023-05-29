import getMoviesFromApi from '../api/movies';
import mapMovies from '../mapping/movies';
import { loadFilmsDataFromLocalStorage, saveFilmsDataOnLocalStorage } from '../storage/movies';

export default async function loadFilmData(movieTitle, page) {
  if (movieTitle === undefined || page === undefined) {
    throw new Error('Need for a movie title and a page number to load the data');
  }

  try {
    return loadFilmsDataFromLocalStorage(movieTitle, page);
  } catch (e) {
    console.error(e.message);
    const filmsData = await getMoviesFromApi(movieTitle, page);
    const films = mapMovies(filmsData);
    saveFilmsDataOnLocalStorage(movieTitle, page, films);
    return films;
  }
}
