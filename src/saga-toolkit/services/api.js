import axios from 'axios';

const getListUsers = async () => {
  const url = `https://5f02ddcf9e41230016d43191.mockapi.io/api/v1/users`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
}

export const api = {
  getListUsers
}