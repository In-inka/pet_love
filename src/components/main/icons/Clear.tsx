import React from 'react';

interface ClearProps {
  className?: string;
}

const Clear: React.FC<ClearProps> = ({ className, ...rest }) => {
  return (
    <div {...rest}>
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 32 32"
      >
        <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="3.5556" d="M25.333 6.667l-18.667 18.667M6.667 6.667l18.667 18.667"></path>
      </svg>
    </div>
  );
};

export default Clear;
