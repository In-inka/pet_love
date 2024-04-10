import { getNews } from '@/api/news';
import News from '@/components/news/News';
import Header from '@/components/news/header/Header';
import { constants } from '@/constants';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import React from 'react';

const NewsPage: React.FC = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [constants.news.FETCH_NEWS],
    queryFn: getNews,
  });
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <News />
        </HydrationBoundary>
      </main>
    </>
  );
};

export default NewsPage;
