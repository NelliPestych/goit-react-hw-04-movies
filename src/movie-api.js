const baseURL = "https://api.themoviedb.org/3";

const fetchMovieDetails = movieId => {
  return fetch(`${baseURL}/movie/${movieId}?api_key=14e14566a5c5f6a5b9d5c973bf639419`)
  .then((res) => res.json());
};

const fetchMovieWithQuery = searchQuery => {
    return fetch(`${baseURL}/search/movie?api_key=14e14566a5c5f6a5b9d5c973bf639419&language=en-US&page=1&include_adult=false&query=${searchQuery}`)
    .then(res => res.json())
    .then(entries => entries.results.map(entry => entry));
};

const fetchTrendingMovies = () => {
  return fetch(`${baseURL}/trending/movie/day?api_key=14e14566a5c5f6a5b9d5c973bf639419`)
    .then(res => res.json())
    .then(entries => entries.results.map(entry => entry));
};

const getMovieReiews = (movieId) => {
  return fetch(`${baseURL}/movie/${movieId}/reviews?api_key=14e14566a5c5f6a5b9d5c973bf639419`)
  .then((res) => res.json());
};

const getCredits = (movieId) => {
  return fetch(`${baseURL}/movie/${movieId}/credits?api_key=14e14566a5c5f6a5b9d5c973bf639419`)
  .then((res) => res.json());
};

export default { fetchMovieDetails, fetchMovieWithQuery, fetchTrendingMovies, getMovieReiews, getCredits };