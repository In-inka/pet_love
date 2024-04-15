import PictureHero from '@/components/main/pictureHero/PictureHero';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { constants } from '@/constants';
import { getNews } from '@/api/news';
import Hero from '@/components/main/hero/Hero';
import Header from '@/components/main/header/Header';

const Home = async () => {
  const queryClient = new QueryClient();

await queryClient.prefetchQuery({
  queryKey: [constants.news.FETCH_NEWS],
  queryFn: () => getNews({ currentPage: 1, perPage: 10 }),
});

  return (
    <>
      <header className="bg-graphite pt-[16px]">
        <Header />
      </header>
      <main>
        <div className="flex min-h-[100vh] w-full flex-col items-center bg-graphite">
          <HydrationBoundary state={dehydrate(queryClient)}>
            <Hero />
          </HydrationBoundary>
          <PictureHero />
        </div>
      </main>
    </>
  );
};

export default Home;
