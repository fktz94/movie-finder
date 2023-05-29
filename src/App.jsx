import useMovieState from './hooks/useMovieState';
import useSearchState from './hooks/useSearchState';
import Movies from './components/Movies';
import Form from './components/Form';
import PageNumber from './components/PageNumber';
import Arrows from './components/Arrows';
import './App.css';

export default function App() {
  const { handleSubmit, isFirstSearch, movieTitle, searchError } = useSearchState();
  const {
    findedMoviesData,
    isError,
    loading,
    results,
    handleNextPage,
    handlePrevPage,
    maxPage,
    page
  } = useMovieState(movieTitle);

  const arrows = (
    <Arrows
      results={results}
      handleNextPage={handleNextPage}
      handlePrevPage={handlePrevPage}
      maxPage={maxPage}
      page={page}
    />
  );

  return (
    <div className="page">
      <Form handleSubmit={handleSubmit} searchError={searchError} />
      <PageNumber maxPage={maxPage} page={page} results={results} />
      {arrows}
      <main>
        <Movies
          movies={findedMoviesData}
          isFirstSearch={isFirstSearch}
          loading={loading}
          isError={isError}
        />
      </main>
      {arrows}
    </div>
  );
}
