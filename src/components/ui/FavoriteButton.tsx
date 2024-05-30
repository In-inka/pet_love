import React, { ButtonHTMLAttributes } from 'react';
import Heart from '../main/icons/Heart';


const FavoriteButton = ({
  ...props
}) => {
  return (
    <button
      {...props}
      className="h-[48px] w-[48px] rounded-[100%]  bg-[#FFF4DF]  "
    >
   <Heart className='w-[18px] h-[18px] stroke-[#F6B83D] fill-transparent m-[0] m-auto'/>
    </button>
  );
};

export default FavoriteButton;
