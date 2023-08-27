import { useState } from 'react';
import { SearchMovieStyle } from './SearchMovieStyle.styled';
import PropTypes from 'prop-types';

const SearchMovie = ({ setSearchText }) => {
  const [inputValue, setInputValue] = useState('');

  const handlerChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  const handlerSubmit = e => {
    e.preventDefault();
    if (inputValue.trim()) {
      setSearchText(inputValue.trim().toLowerCase());
      setInputValue('');
    } else {
      return alert('Please, write anything');
    }
  };

  return (
    <SearchMovieStyle onSubmit={handlerSubmit}>
      <input onChange={handlerChange} value={inputValue} />
      <button type="submit">Search</button>
    </SearchMovieStyle>
  );
};

export default SearchMovie;

SearchMovie.propTypes = {
  setSearchText: PropTypes.func.isRequired,
};
