import React from 'react';

interface CloseSelectProps {
  className?: string;
}

const CloseSelect: React.FC<CloseSelectProps> = ({ className, ...rest }) => {
  return (
    <div {...rest}>
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 32 32"
      >
 <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="3.5556" d="M8 12l8 8 8-8"></path>      </svg>
    </div>
  );
};

export default CloseSelect;
