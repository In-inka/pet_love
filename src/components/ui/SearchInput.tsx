import {
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
  useState,
} from 'react';
import Search from '../main/icons/Search';
import Clear from '../main/icons/Clear';

interface SearchInputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void; 
}

const SearchInput = forwardRef(function TextInput(
  {
    placeholder,
    onChange,
    value = '',
    ...rest
  }: SearchInputProps,
  _ref: ForwardedRef<HTMLInputElement>
) {
  const [inputValue, setInputValue] = useState(value as string);
  const [isChange, setIsChange] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setIsChange(newValue !== '');
     onChange(newValue);
  };

  const handleClear = () => {
    setInputValue('');
    setIsChange(false);
     onChange('');
  };

  return (
    <div className='relative'>
      <input
        {...rest}
        id={placeholder}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        ref={_ref}
        className="block w-[227px] h-[48px] rounded-[30px] p-[14px] pr-[38px] outline-none placeholder:text-[#262626]"
      />
      <div className='flex gap-[4px] absolute right-[14px] top-[14px]'>
        {isChange && (
          <button type='button' onClick={handleClear}>
            <Clear className='stroke-black fill-none w-[18px] h-[18px]' />
          </button>
        )}
        <button type='button' >
          <Search className="stroke-black fill-none w-[18px] h-[18px]" />
        </button>
      </div>
    </div>
  );
});

SearchInput.displayName = 'SearchInput';

export default SearchInput;
