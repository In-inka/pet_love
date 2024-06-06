import axios from '@/config/axios';

export const getNotices = async({ currentPage, perPage, keyword, category, species, locationId, byDate, byPrice, byPopularity }: { currentPage: number; perPage: number; keyword?: string, category?: string, species?: string, locationId?: string, byDate?: boolean, byPrice?: boolean , byPopularity?: boolean }) => {
  const { data } = await axios.get('/notices', {
    params: {
      page: currentPage,
      limit: perPage,
      keyword: keyword,
      category: category,
      species: species,
      locationId: locationId,
      byDate: byDate,
      byPrice: byPrice,
      byPopularity: byPopularity
    },
  });
  return data;
};


export const getCategory = async () => {
  const { data } = await axios.get('/notices/categories');
  return data;
};


export const getSex = async () => {
  const { data } = await axios.get('/notices/sex');
  return data;
};



export const getSpecies = async () => {
  const { data } = await axios.get('/notices/species');
  return data;
};