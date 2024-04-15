/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from '@/config/axios';

export const getNews = async ({ currentPage, perPage }: { currentPage: number; perPage: number }) => {
  const { data } = await axios.get(`/news?page=${currentPage}&perPage=${perPage}`);
  return data;
};
