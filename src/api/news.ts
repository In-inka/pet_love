/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from '@/config/axios';

export const getNews = async ({ currentPage, perPage, keyword }: { currentPage: number; perPage: number; keyword?: string }) => {
  const { data } = await axios.get('/news', {
    params: {
      page: currentPage,
      limit: perPage,
      keyword: keyword,
    },
  });
  return data;
};


