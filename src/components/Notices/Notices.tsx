'use client';

import Title from "../title/Title";
import NoticesList from './NoticesList/NoticesList';

const Notices = () => {


  return (
    <div className="flex min-h-[100vh] w-full flex-col text-black pt-[96px] pb-10">
      <section>
         <div className="flex justify-between items-center mb-[40px] container">
          <Title title="Find your favorite pet" />
        </div>
        <NoticesList />
      </section>
    </div>
  );
};

export default Notices;