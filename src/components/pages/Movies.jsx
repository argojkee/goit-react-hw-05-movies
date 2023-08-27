import SearchMovie from 'components/SearchMovie/SearchMovie';
import MovieListByName from 'components/MovieListByName/MovieListByName';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByName } from 'components/services/moviedb';

const Movies = () => {
  const [movieList, setMovieList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('query')) {
      setSearchText(searchParams.get('query'));
    }
  }, [searchParams]);

  useEffect(() => {
    if (!searchText) {
      return;
    }

    setError('');
    fetchMovieByName(searchText)
      .then(resp => {
        if (!resp.ok) {
          setError('Sorry, something wrong');
          throw new Error();
        }
        return resp.json();
      })
      .then(data => {
        if (data.results.length === 0) {
          setError('Sorry, nothink');
          throw new Error();
        }

        setMovieList(
          data.results.map(film => ({ title: film.title, id: film.id }))
        );
      })
      .catch(err => console.log(err));
    setSearchParams({ query: searchText });
  }, [searchText, setSearchParams]);

  return (
    <>
      <SearchMovie setSearchText={setSearchText} />

      {error && <h3>{error}</h3>}
      {!error && movieList.length > 0 && <MovieListByName movies={movieList} />}
    </>
  );
};

export default Movies;
