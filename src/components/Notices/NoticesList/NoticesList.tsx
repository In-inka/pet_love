import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { constants } from '@/constants';

import Loader from '../../ui/Loader';
import { getNotices } from '@/api/notices';
import Pagination from '@/components/news/pagination/Pagination';
import NoticesItem from '../NoticesItem/NoticesItem';
import { INotices } from '@/types/notices';
import Filters from '../Filter/Filter';


const NoticesList = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const perPage: number = 6;
  const [progress, setProgress] = useState(5);
 

 const { data, isLoading, isError, error } = useQuery({
    queryKey: [constants.notices.FETCH_NOTICES, currentPage, perPage],
    queryFn: () => getNotices({
      currentPage: currentPage,
      perPage: perPage,
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
  
  const dataNotices = data?.results || [];
  const totalPages = data?.totalPages
  

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  }; 
 if (isLoading) {
    return <Loader progress={progress} />;
 }
  


  return (
    <div>
      <Filters/>
     <ul className="flex gap-[30px] flex-wrap pb-[60px] container">
        { dataNotices?.map((item: INotices) => (
          <li key={item._id}>
            <NoticesItem item={item} />
          </li>
        ))}
      </ul>
    {dataNotices?.length >= 1 &&  (<Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />)}
    </div>
  );
};

export default NoticesList;
