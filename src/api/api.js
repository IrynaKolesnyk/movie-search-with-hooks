import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const getTrending = async () => {
  try {
    const res = await axios.get(`/trending/movie/week?api_key=${API_KEY}`);
    return res.data.results;
  } catch (error) {
    throw new Error(error);
  }
};

const searchMoviesByQuery = async (query) => {
  try {
    const res = await axios.get(
      `/search/movie?query=${query}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
    );
    return res.data.results;
  } catch (error) {
    throw new Error(error);
  }
};

const getMovieDetails = async (movieId) => {
  try {
    const res = await axios.get(
      `/movie/${movieId}?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
    );
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};

const getMovieCast = async (movieId) => {
  try {
    const res = await axios.get(
      `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
    );
    // console.log("res.data :>> ", res.data);
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};

const getMovieReviews = async (movieId) => {
  try {
    const res = await axios.get(
      `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
    );
    console.log("res.data :>> ", res.data.results);
    return res.data.results;
  } catch (error) {
    throw new Error(error);
  }
};

const api = {
  getTrending,
  searchMoviesByQuery,
  getMovieDetails,
  getMovieCast,
  getMovieReviews,
};

export default api;
