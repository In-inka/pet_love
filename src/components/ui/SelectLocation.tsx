/* eslint-disable no-unused-vars */
'use client';
import { ICategory } from '@/types/notices';
import React, {
  ForwardedRef,
  forwardRef,
  useState,
} from 'react';

import Select, { ActionMeta } from 'react-select';
import { selectStyles } from './selectStyles';
import { Option } from '../Notices/Filter/Filter';
import DropdownIndicator from '../main/icons/DropdownIndicator';
import Search from '../main/icons/Search';


interface SelectLocationProps {
   value: string;
  options: Option[];
  placeholder: string;
  onChange: (value: string) => void;
  onKeywordChange: (keyword: string) => void; 
}
const SelectLocation = forwardRef(function SelectLocation(
  {
    options,
    onChange,
    value,
    placeholder,
    onKeywordChange
  }: SelectLocationProps,
  _ref: ForwardedRef<HTMLInputElement>
) {


  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen(true);
  };

  const handleMenuClose = () => {
    setIsOpen(false);
  };

   const handleChange = (
    newValue: unknown,
    _actionMeta: ActionMeta<unknown>
   ) => {
    if (
      typeof newValue === 'object' &&
      newValue !== null &&
      'value' in newValue
    ) {
      onChange((newValue as Option).value);
    } else {
      onChange('');
    }
   };
  
  

  



  return (
    <div className="relative m-2 w-[190px]">
      <Select
         isClearable
        id={placeholder}
              styles={selectStyles}
              placeholder={placeholder}
              options={options}
             onInputChange={(inputValue) => onKeywordChange(inputValue)}
        onChange={handleChange}
        onMenuOpen={handleMenuOpen}
        onMenuClose={handleMenuClose}
          components={{
            DropdownIndicator: () => (
               <Search className='stroke-black fill-none w-[18px] h-[18px]'/>
              ),
        }}
            />
    </div>
  );
});

export default SelectLocation;
