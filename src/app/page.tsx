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


  return (
    <>
      <header className="bg-graphite pt-[16px]">
        <Header />
      </header>
      <main>
        <div className="flex min-h-[100vh] w-full flex-col items-center bg-graphite">
            <Hero />
          <PictureHero />
        </div>
      </main>
    </>
  );
};

export default Home;
