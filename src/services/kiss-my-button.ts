import axios from 'axios';

const getMovies = () => {
  const res = axios.get(
    `${process.env.REACT_APP_API_DEV_URL}` +
      `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`
  );
  return res;
};

const moviesApi = {
  getMovies,
};

export default moviesApi;
