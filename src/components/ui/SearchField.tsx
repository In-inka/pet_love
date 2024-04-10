import React, {
  forwardRef,
  ForwardedRef,
  InputHTMLAttributes,
  useState,
} from 'react';
import Search from '../main/icons/Search';

interface SearchFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  errorText?: string;
}

const SearchField = forwardRef(function SearchField(
  { errorText, ...rest }: SearchFieldProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  // Стан для зберігання значення вводу
  const [inputValue, setInputValue] = useState('');

  // Обробник зміни значення вводу
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    console.log(newValue); // Виводимо нове значення в консоль
  };

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
        <div className="absolute  right-[14px] top-[14px] ">
          <Search className="stroke-black fill-none w-[18px] h-[18px]" />
        </div>
      </div>
    </div>
  );
});

SearchField.displayName = 'SearchField';

export default SearchField;
