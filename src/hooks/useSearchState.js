import { useRef, useState } from 'react';

export default function useSearchState() {
  const [movieTitle, setMovieTitle] = useState('');
  const [searchError, setSearchError] = useState('');
  const isFirstSearch = useRef(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFirstSearch.current) isFirstSearch.current = false;
    const { query } = Object.fromEntries(new FormData(event.target));
    if (query === '') return setSearchError('no movie was introduced');
    if (query.startsWith(' ')) return setSearchError('cannot start with an empty space');
    if (query.endsWith(' ')) return setSearchError('unnecesary empty space at the end');
    if (query.match(/\s{2}/g)) return setSearchError('too many blank spaces');
    if (query.length < 3) return setSearchError('3 characters minimum');
    const searchableValue = query.split(' ').join('%20');
    setSearchError('');
    return setMovieTitle(searchableValue);
  };

  return { handleSubmit, isFirstSearch: isFirstSearch.current, movieTitle, searchError };
}
