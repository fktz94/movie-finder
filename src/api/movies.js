const API_URL = 'https://www.omdbapi.com';
// const API_KEY = '4287ad07';
const API_KEY = '235a2c86';
const API_SEARCH = `${API_URL}/?apikey=${API_KEY}&s=`;

export default async function getMoviesFromApi(movieTitle, page) {
  const searchedPage = `${API_SEARCH}${movieTitle}&type=movie&page=${page}`;

  if (!movieTitle) return null;

  try {
    const data = await fetch(searchedPage);
    const json = await data.json();
    if (!json.Search) throw new Error('No movies have been found');
    const { Search, totalResults } = json;
    return { Search, totalResults };
  } catch (e) {
    // console.error(e.message);
    throw new Error(e.message);
  }
}
