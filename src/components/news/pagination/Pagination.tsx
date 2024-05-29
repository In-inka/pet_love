import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 3;
    const halfVisiblePages = Math.floor(maxVisiblePages / 2);
    
    let startPage = Math.max(1, currentPage - halfVisiblePages);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const renderPageNumbers = () => {
    const pageNumbers = getPageNumbers();
    const pages = [];

    for (let i = 0; i < pageNumbers.length; i++) {
      const page = pageNumbers[i];
      const isActive = currentPage === page;
      pages.push(
        <li key={page} className={`${isActive ? 'active' : ''}`}>
          <button onClick={() => onPageChange(page)} className={`w-[44px] h-[44px] text-[18px] page-link rounded-[100%] border border-solid border-[rgba(38, 38, 38, 0.15)] ${isActive ? 'bg-[#F6B83D] text-white' : 'bg-transparent'}`}>
            {page}
          </button>
        </li>
      );
    }

    return pages;
  };

  return (
    <nav aria-label="Pagination">
      <ul className="flex gap-[10px] justify-center text-xl items-end">
        <li className={`${currentPage === 1 ? 'disabled' : ''}`}>
          <button onClick={() => onPageChange(1)} className="w-[44px] h-[44px] text-[18px] page-link rounded-[100%] border border-solid border-[rgba(38, 38, 38, 0.15)]">&lt;&lt;</button>
        </li>
        <li className={`${currentPage === 1 ? 'disabled' : ''}`}>
          <button onClick={() => onPageChange(currentPage - 1)} className="w-[44px] h-[44px] text-[18px] page-link rounded-[100%] border border-solid border-[rgba(38, 38, 38, 0.15)]">&lt;</button>
        </li>
        {renderPageNumbers()}
        <li className={`${currentPage === totalPages ? 'disabled' : ''}`}>
          <button onClick={() => onPageChange(currentPage + 1)} className="w-[44px] h-[44px] text-[18px] page-link rounded-[100%] border border-solid border-[rgba(38, 38, 38, 0.15)]">&gt;</button>
        </li>
        <li className={`${currentPage === totalPages ? 'disabled' : ''}`}>
          <button onClick={() => onPageChange(totalPages)} className="w-[44px] h-[44px] text-[18px] page-link rounded-[100%] border border-solid border-[rgba(38, 38, 38, 0.15)]">&gt;&gt;</button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
