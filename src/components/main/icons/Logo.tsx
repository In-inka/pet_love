import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className, ...rest }) => {
  return (
    <div className={`${className}`} {...rest}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="23"
        viewBox="0 0 32 32"
        fill="#ffffff"
      >
        <path d="M15.99 7.56c-2.559-3.021-6.826-3.834-10.031-1.067-3.208 2.767-3.659 7.393-1.141 10.666 1.614 2.095 5.743 5.983 8.505 8.506 0.918 0.839 1.376 1.258 1.926 1.426 0.473 0.145 1.011 0.145 1.485 0 0.55-0.167 1.009-0.587 1.926-1.426 2.762-2.524 6.893-6.41 8.505-8.506 2.518-3.272 2.122-7.928-1.141-10.666-3.26-2.738-7.473-1.953-10.031 1.067z"></path>
      </svg>
    </div>
  );
};

export default Logo;
