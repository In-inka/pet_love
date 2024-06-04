import axios from '@/config/axios';



export const getCities = async () => {
  const { data } = await axios.get('/cities');
  return data;
};

