import { getNotices } from '@/api/notices';
import Notices from '@/components/Notices/Notices';
import Header from '@/components/news/header/Header';
import { constants } from '@/constants';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import React from 'react';

const FindPetsPage: React.FC = async () => {
  const queryClient = new QueryClient();

await queryClient.prefetchQuery({
  queryKey: [constants.notices.FETCH_NEWS],
  queryFn: () => getNotices({ currentPage: 1, perPage: 6 }),
 });
  
  
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Notices />
        </HydrationBoundary>
      </main>
    </>
  );
};

export default FindPetsPage;
