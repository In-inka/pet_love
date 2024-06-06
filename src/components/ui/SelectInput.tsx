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


interface SelectInputProps {
   value: string;
  options: Option[];
  placeholder: string;
  onChange: (value: string) => void;
}
const SelectInput = forwardRef(function SelectInput(
  {
    options,
    onChange,
    value,
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
        id={placeholder}
        defaultInputValue={''}
              styles={selectStyles}
              placeholder={placeholder}
              options={options}
             value={options.find((c) => c.value === value) || null}
        onChange={handleChange}
        onMenuOpen={handleMenuOpen}
        onMenuClose={handleMenuClose}
          components={{
          DropdownIndicator:  (props) => (
                <DropdownIndicator
                  isOpen={isOpen}
                  {...props}
                />
              ),
        }}
            />
    </div>
  );
});

export default SelectInput;
