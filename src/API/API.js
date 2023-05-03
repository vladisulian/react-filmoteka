import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
const API_KEY = "635ac74a11f3f55a21a984cd556f5915";

// https://api.themoviedb.org/3/trending/all/day?api_key=635ac74a11f3f55a21a984cd556f5915

const getPosterPath = (posterPath) => {
  return `https://image.tmdb.org/t/p/original/${posterPath}`;
};

const getTrendingFilms = async () => {
  try {
    const data = await axios.get(`trending/all/day?api_key=${API_KEY}`);
    console.log(data.data.results);
    return data.data.results;
  } catch (error) {
    console.error(error);
  }
};

export { getTrendingFilms, getPosterPath };
