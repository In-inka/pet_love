import React from 'react';

interface SearchProps {
  className?: string;
}

const Search: React.FC<SearchProps> = ({ className, ...rest }) => {
  return (
    <div {...rest}>
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 32 32"
      >
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="4"
          strokeWidth="3.5556"
          d="M14.667 25.333c5.891 0 10.667-4.776 10.667-10.667s-4.776-10.667-10.667-10.667v0c-5.891 0-10.667 4.776-10.667 10.667s4.776 10.667 10.667 10.667v0zM28 28l-5.801-5.799"
        ></path>
      </svg>
    </div>
  );
};

export default Search;
