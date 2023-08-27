const API_KEY = '1f49b40244739c7e3b1b706c1c1ec0d7';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = () => {
  return fetch(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`);
};

export const fetchMovieByName = value => {
  return fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${value}`);
};

export const fetchMovieById = id => {
  return fetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);
};

export const fetchForActors = id => {
  return fetch(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`);
};

export const fetchToReviews = id => {
  return fetch(`${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`);
};
