// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function MovieCard({ movie: { poster, title, year } }) {
  const imgSrc =
    poster !== ('N/A' || '')
      ? poster
      : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwD0aFIxo63CGbUtLfnoWlNWzAzDTC-vDgNg&usqp=CAU';
  return (
    <figure>
      <h3>{title}</h3>
      <p>{year}</p>
      <img src={imgSrc} alt={`Poster of ${title} movie`} />
    </figure>
  );
}

export default function Movies({ isError, isFirstSearch, loading, movies }) {
  return (
    <>
      {isFirstSearch && <p>Welcome! Find the movie you&#39;re looking for.</p>}
      {loading && <p>loading...</p>}
      {movies && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      {isError && <p>{isError}</p>}
    </>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.string).isRequired
};

Error.propTypes = {
  isError: PropTypes.string
};

Error.defaultProps = {
  isError: ''
};

Movies.propTypes = {
  isError: PropTypes.string,
  isFirstSearch: PropTypes.bool,
  movies: PropTypes.arrayOf(PropTypes.objectOf),
  loading: PropTypes.bool
};

Movies.defaultProps = {
  isError: '',
  isFirstSearch: false,
  movies: null,
  loading: false
};
