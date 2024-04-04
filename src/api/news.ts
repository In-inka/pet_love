/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from '@/config/axios';

export const getNews = async () => {
  const { data } = await axios.get('/news');
  return data;
};
