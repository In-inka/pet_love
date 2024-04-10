'use client';

import { INews } from '@/types/news';
import Image from 'next/image';
import Link from 'next/link';

const formatDate = (inputDate: string) => {
  const date = new Date(inputDate);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Місяць починається з нуля, тому додаємо 1
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

const NewsItem = ({ item }: { item: INews }) => {
  const inputDate = '2023-04-11T09:00:18+0000';
  const formattedDate = formatDate(inputDate);
  console.log(formattedDate); // Виведе: 11/04/2023

  return (
    <>
      <div className="flex  flex-col w-[358px] h-[476px] font-['Manrope',_sans-serif]">
        <div>
          <Image
            src={item.imgUrl}
            alt={item.title}
            width={358}
            height={226}
            className="h-[226px] w-[360px] rounded-[8px] mb-7"
          />
          <div className="mb-[28px]">
            {' '}
            <h2 className="h-[52px] text-[20px] font-bold mb-[14px] overflow-hidden">
              {item.title}
            </h2>
            <p className="text-[16px] h-[80px] overflow-hidden">{item.text}</p>
          </div>
          <div className="flex justify-between items-end">
            <p className="text-[#262626] text-opacity-50 text-[16px]">
              {formattedDate}
            </p>
            <Link href={item.url} className="text-[#f6b83d] text-[16px]">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
