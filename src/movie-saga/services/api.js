import axios from 'axios';

const searchMovieByKeyword = async (keyword) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=cfe422613b250f702980a3bbf9e90716&page=1`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
}
export const api = {
  searchMovieByKeyword
}