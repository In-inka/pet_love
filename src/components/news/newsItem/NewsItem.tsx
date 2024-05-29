'use client';

import { INews } from '@/types/news';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const formatDate = (inputDate: string) => {
  const date = new Date(inputDate);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

const NewsItem = ({ item }: { item: INews }) => {
  const inputDate = '2023-04-11T09:00:18+0000';
  const formattedDate = formatDate(inputDate);

  const [isTextOverflowing, setIsTextOverflowing] = useState(false);

  useEffect(() => {
    const textElement = document.getElementById('newsText');
    if (textElement) {
      setIsTextOverflowing(textElement.scrollHeight > textElement.clientHeight);
    }
  }, [item.text]);


  return (
    <>
      <div className="flex flex-col w-[358px] h-[476px] font-['Manrope',_sans-serif]">
        <div>
          <img
            src={item.imgUrl}
            alt={item.title}
            width={358}
            height={226}
            className="object-cover h-[226px] w-[361px] rounded-[15px] mb-7"
          />
          <div className="mb-[28px] ">
            <h2  className={`h-[52px] text-[20px] font-bold mb-[14px] overflow-hidden  `}>
              {item.title}
            </h2>
            <p
              id="newsText"
              className={`text-[16px] h-[62px] overflow-hidden  ${isTextOverflowing ? '' : 'line-clamp-3'} leading-[1.25] font-medium`}
            >
              {item.text}
            </p>
          </div>
          <div className="flex justify-between items-end">
            <p className="text-[#262626] text-opacity-50 text-[16px]">
              {formattedDate}
            </p>
            <a href={item.url} className="text-[#f6b83d] text-[16px]">
              Read more
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItem;