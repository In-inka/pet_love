import React from 'react';

interface CloseProps {
  className?: string;
}

const Close: React.FC<CloseProps> = ({ className, ...rest }) => {
  return (
    <div {...rest}>
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 32 32"
      >
        <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="3.5556" d="M24 8l-16 16M8 8l16 16"></path>
        </svg>
    </div>
  );
};

export default Close;
