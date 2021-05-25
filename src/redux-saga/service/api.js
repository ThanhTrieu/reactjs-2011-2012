import axios from 'axios';

const urlApi = 'https://api.covid19api.com/summary';

const getDataCovid19Api = async () => {
  const response = await axios.get(urlApi);
  const result = response.status === 200 ? response.data : {};
  return result;
}

export const api = {
  getDataCovid19Api
}