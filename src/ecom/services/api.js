import axios from 'axios';

const getPopularProduct = async (size = 24, page = 0) => {
  const url = `https://voso.vn/recommendation/popular-product?pageSize=${size}&pageIndex=${page}`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
}

export const api = {
  getPopularProduct
}