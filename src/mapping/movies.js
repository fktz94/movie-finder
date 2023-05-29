export default function mapMovies({ Search, totalResults }) {
  return {
    movies: Search.map(({ imdbID, Year, Poster, Title }) => ({
      id: imdbID,
      title: Title,
      poster: Poster,
      year: Year
    })),
    totalResults
  };
}
