'use client';

import { INews } from '@/types/news';
import { INotices } from '@/types/notices';
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

const NoticesItem = ({ item }: { item: INotices }) => {
  const date = new Date(item.birthday);
const formattedDate = date.toLocaleDateString('uk-UA');




  return (
    <>
      <div className="flex flex-col w-[363px] h-[444px] font-['Manrope',_sans-serif] bg-[#FFFFFF] p-[20px] rounded-[15px]">
          <img
            src={item.imgURL}
            alt={item.title}
            width={315}
          height={178}
          
            className="h-[178px] w-[315px] rounded-[15px] mb-6 object-cover"
          />
          <p className="mb-[8px]">{item.title}</p>
          <div className='flex gap-[20px] mb-[16px]'>
              <div className='flex flex-col gap-[2px]'>
                <p className='text-[10px] text-[rgba(38, 38, 38, 0.5)]'>Name</p>
                 <p className='text-[12px]'>{item.name}</p>
              </div>
              <div className='flex flex-col gap-[2px]'>
                  <p className='text-[10px] text-[rgba(38, 38, 38, 0.5)]'>Birthday</p>
                 <p className='text-[12px]'>{formattedDate}</p>
              </div>
              <div className='flex flex-col gap-[2px]'>
                  <p className='text-[10px] text-[rgba(38, 38, 38, 0.5)]'>Sex</p>
                 <p className='text-[12px]'>{item.sex}</p>
              </div>
              <div className='flex flex-col gap-[2px]'>
                  <p className='text-[10px] text-[rgba(38, 38, 38, 0.5)]'>Species</p>
                 <p className='text-[12px]'>{item.species}</p>
              </div>
              <div className='flex flex-col gap-[2px]'>
                  <p className='text-[10px] text-[rgba(38, 38, 38, 0.5)]'>Category</p>
                 <p className='text-[12px]'>{item.category}</p>
          </div>
            </div>
                <p
              className={`text-[14px] h-[62px] overflow-hidden leading-[1.25] font-medium mb-[50px]`}
            >
              {item.comment}
            </p>
          <div className="flex justify-between items-end">
            <a href={''} className="text-[#f6b83d] text-[16px]">
              Read more
            </a>
          </div>
      </div>
    </>
  );
};

export default NoticesItem;