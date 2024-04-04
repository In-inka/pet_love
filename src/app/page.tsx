import PictureHero from '@/components/main/pictureHero/PictureHero';
import Hero from '../components/main/hero/Hero';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
  useQuery,
} from '@tanstack/react-query';
import { constants } from '@/constants';
import { getNews } from '@/api/news';

const Home = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [constants.news.FETCH_NEWS],
    queryFn: getNews,
  });


  return (
    <div className="flex min-h-[100vh] w-full flex-col items-center bg-graphite">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Hero />
      </HydrationBoundary>
      <PictureHero />
    </div>
  );
};

export default Home;
