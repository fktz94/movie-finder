import { useEffect, useRef, useState } from 'react';
import loadFilmData from '../services/movies';

export default function useMovieState(movieTitle) {
  const [page, setPage] = useState(1);
  const [findedMoviesData, setFindedMoviesData] = useState(null);
  const [results, setResults] = useState('');
  const [isError, setIsError] = useState(null);
  const [loading, setLoading] = useState(false);
  const title = useRef(movieTitle);

  const handlePrevPage = () => {
    if (page === 1) return;
    setPage((oldPage) => oldPage - 1);
  };

  const handleNextPage = () => {
    const maxPage = results / 10 / page < 1;
    if (maxPage) return;
    setPage((oldPage) => oldPage + 1);
  };

  useEffect(() => {
    setIsError('');
    setPage(1);
    setResults('');
  }, [movieTitle]);
  // Revisar que funcione propiamente esto. Se hacen fetchs innecesarios con el nro de página antigüo. (problema de rendimiento)
  useEffect(() => {
    if (!movieTitle) return;
    const catchData = async () => {
      setLoading(true);
      try {
        title.current = movieTitle;
        const { movies, totalResults } = await loadFilmData(movieTitle, page);
        setFindedMoviesData(movies);
        if (results !== totalResults) setResults(totalResults);
      } catch (e) {
        console.error(e.message);
        setIsError(e.message);
      } finally {
        setLoading(false);
      }
    };
    catchData();

    // eslint-disable-next-line consistent-return
    return () => {
      setFindedMoviesData();
      setIsError(null);
    };
  }, [movieTitle, page]);

  return {
    findedMoviesData,
    handleNextPage,
    handlePrevPage,
    isError,
    loading,
    maxPage: Math.ceil(results / 10),
    results,
    page
  };
}
