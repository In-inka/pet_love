'use client';
import NewsList from '../newsList/NewsList';
import Title from '../title/Title';
import SearchField from '../ui/SearchField';

const News = () => {
  return (
    <div className="flex min-h-[100vh] w-full flex-col text-black pt-[96px] container">
      <section>
        <div className="flex justify-between items-center mb-[60px]">
          <Title title="News" />
          <SearchField />
        </div>
        <NewsList />
      </section>
    </div>
  );
};

export default News;
