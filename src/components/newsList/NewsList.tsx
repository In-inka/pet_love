import { useState } from 'react';
import NewsItem from '../newsItem/NewsItem';
import { useQuery } from '@tanstack/react-query';
import { getNews } from '@/api/news';
import { constants } from '@/constants';
import { INews } from '@/types/news';
import Pagination from '../pagination/Pagination';

const NewsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 2;

  const { data } = useQuery({
    queryKey: [constants.news.FETCH_NEWS, currentPage, perPage],
    queryFn: () => getNews({
    currentPage: currentPage,
    perPage: perPage
}),
  });

  const totalPages = data?.totalPages;
  const dataNews = data?.results;

  const onPageChange = ( pageNumber: number ) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <ul className="flex gap-[35px] flex-wrap pb-[60px]">
        {dataNews?.map((item: INews) => (
          <li key={item.id}>
            <NewsItem item={item} />
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default NewsList;
