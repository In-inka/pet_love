/* eslint-disable no-unused-vars */
'use client';
import { ICategory } from '@/types/notices';
import React, {
  ForwardedRef,
  forwardRef,
  useState,
} from 'react';

import Select, { ActionMeta } from 'react-select';


interface SelectInputProps {
  options: [];
  placeholder: string;
}
const SelectInput = forwardRef(function SelectInput(
  {
    options,
    placeholder,
  }: SelectInputProps,
  _ref: ForwardedRef<HTMLInputElement>
) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen(true);
  };

  const handleMenuClose = () => {
    setIsOpen(false);
  };



  return (
    <div className="relative m-2 w-[240px] sm:w-[340px] md:w-[264px] xl:w-[358px]">
      <Select
        isClearable
        id={placeholder}
        options={options}
        placeholder={placeholder}
        onMenuOpen={handleMenuOpen}
        onMenuClose={handleMenuClose}
      />
    </div>
  );
});

export default SelectInput;
