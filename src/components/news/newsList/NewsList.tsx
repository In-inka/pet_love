import { useEffect, useState } from 'react';
import NewsItem from '../newsItem/NewsItem';
import { useQuery } from '@tanstack/react-query';
import { getNews } from '@/api/news';
import { constants } from '@/constants';
import { INews } from '@/types/news';
import Pagination from '../pagination/Pagination';
import Loader from '../../ui/Loader';

interface NewsListProps {
  searchNews?: string | undefined;
}

const NewsList = ({ searchNews }: NewsListProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const perPage: number = 6;
  const [progress, setProgress] = useState(5);
 

 const { data, isLoading, isError, error } = useQuery({
    queryKey: [constants.news.FETCH_NEWS, currentPage, perPage, searchNews],
    queryFn: () => getNews({
      currentPage: currentPage,
      perPage: perPage,
      keyword: searchNews,
    })
 });
  
  useEffect(() => {
  let intervalId: NodeJS.Timeout;
  if (isLoading) {
    intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        return Math.min(prevProgress + 7, 100);
      });
    }, 3); 
  } else {
    setProgress(100);
  }
  return () => {
    clearInterval(intervalId);
  };
}, [isLoading]);
  const dataNews = data?.results || [];
  const totalPages = data?.totalPages

   useEffect(() => {
    setCurrentPage(1);
  }, [searchNews]);

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  }; 
 if (isLoading) {
    return <Loader progress={progress} />;
  }


  return (
    <div>
      <ul className="flex gap-[35px] flex-wrap pb-[60px]">
        { dataNews?.map((item: INews) => (
          <li key={item.id}>
            <NewsItem item={item} />
          </li>
        ))}
      </ul>
    {dataNews?.length >= 1 &&  (<Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />)}
    </div>
  );
};

export default NewsList;
