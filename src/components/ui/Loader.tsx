import React from 'react';

interface LoaderProps {
  progress: number;
}

const Loader = ({ progress }: LoaderProps) => {
  return (
    <div
      className="fixed left-0 right-0 top-0 z-[9999] flex h-full w-full flex-col items-center 
    justify-center bg-graphite"
    >
      <div className="bg-[#F6B83D] relative h-[150px] w-[150px] animate-spin rounded-full shadow-xl">
        <div className="absolute left-[50%] top-[50%] h-[120px] w-[120px] -translate-x-[50%] -translate-y-[50%] rounded-full bg-black/70 flex items-center justify-center">
          <span className="text-white text-xl">{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
