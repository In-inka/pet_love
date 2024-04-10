'use client';
import { getNews } from '@/api/news';
import { constants } from '@/constants';
import { INews, NewsResponse } from '@/types/news';
import { useQuery } from '@tanstack/react-query';
import NewsItem from '../newsItem/NewsItem';

const NewsList = () => {
  const { data } = useQuery({
    queryKey: [constants.news.FETCH_NEWS],
    queryFn: getNews,
  });

  const results = data?.results;

  return (
    <div>
      <ul className="flex gap-[35px] flex-wrap">
        {results?.map((item: INews) => (
          <li key={item.id}>
            <NewsItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
