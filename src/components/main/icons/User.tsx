import React, { HTMLProps } from 'react';

interface UserProps extends HTMLProps<HTMLDivElement> {}
const User: React.FC<UserProps> = ({ className, ...rest }) => {
  return (
    <div className={`${className}`} {...rest}>
      <svg
        width="50"
        height="50"
        viewBox="0 0 32 32"
        fill="#FFF4DF"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"></path>
        <path
          stroke="#F6B83D"
          fill="#F6B83D"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="4"
          strokeWidth="1.28"
          d="M16 17.92c-2.029 0-3.834 0.979-4.982 2.5-0.247 0.327-0.371 0.491-0.367 0.712 0.003 0.171 0.11 0.387 0.244 0.492 0.174 0.136 0.415 0.136 0.897 0.136h8.413c0.482 0 0.723 0 0.897-0.136 0.134-0.106 0.242-0.321 0.245-0.492 0.004-0.221-0.12-0.384-0.367-0.712-1.149-1.52-2.953-2.5-4.982-2.5zM16 16c1.591 0 2.88-1.289 2.88-2.88s-1.289-2.88-2.88-2.88v0c-1.591 0-2.88 1.289-2.88 2.88s1.289 2.88 2.88 2.88v0z"
        ></path>
      </svg>
    </div>
  );
};

export default User;
