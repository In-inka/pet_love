'use client';
import { useState } from 'react';
import NewsList from './newsList/NewsList';
import Title from '../title/Title';
import SearchField from '../ui/SearchField';

const News = () => {
  const [searchNews,setSearchNews] = useState<string | undefined>()

  const onChange = (data:string) => {
  setSearchNews(data)
}

  return (
    <div className="flex min-h-[100vh] w-full flex-col text-black pt-[96px] container pb-10">
      <section>
        <div className="flex justify-between items-center mb-[60px]">
          <Title title="News" />
          <SearchField onChange={ onChange} />
        </div>
        <NewsList searchNews={ searchNews} />
      </section>
    </div>
  );
};

export default News;
