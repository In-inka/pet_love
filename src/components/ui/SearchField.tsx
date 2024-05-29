import React, {
  forwardRef,
  ForwardedRef,
  useState,
} from 'react';
import Search from '../main/icons/Search';
import Clear from '../main/icons/Clear';

interface SearchFieldProps {
  errorText?: string;
  onChange: (data:string) => void;
}

const SearchField = forwardRef(function SearchField(
  { errorText, onChange, ...rest }: SearchFieldProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const [inputValue, setInputValue] = useState('');
  const [isChange, setIsChange] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setIsChange(true)
  };

  const handleSubmit = () => {
    onChange(inputValue);
  }
  const handleClear = () => {
    setInputValue('');
     setIsChange(false)
  }

  return (
    <div>
      <div className="relative">
        <input
          {...rest}
          value={inputValue}
          type="text"
          placeholder="Search"
          onChange={handleChange}
          className="block w-[230px] h-[48px] border border-solid border-[rgba(38, 38, 38, 0.15)] rounded-[30px] p-[14px] pr-[38px] outline-none"
        />
       <div className='flex gap-[4px] absolute  right-[14px] top-[14px] '>
            {isChange &&  <button type='button' onClick={handleClear} >
          <Clear className='stroke-black fill-none w-[18px] h-[18px]'/>
        </button>}
        <button type='button' onClick={handleSubmit} >
          <Search className="stroke-black fill-none w-[18px] h-[18px]" />
        </button>
      </div>
      </div>
    </div>
  );
});

SearchField.displayName = 'SearchField';

export default SearchField;
