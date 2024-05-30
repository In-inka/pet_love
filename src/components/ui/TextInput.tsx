import {
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
} from 'react';
import Search from '../main/icons/Search';

interface TextInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
}

const TextInput = forwardRef(function TextInput(
  {
    title,
    value = '',
    ...rest
  }: TextInputProps,
  _ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <div className='relative'>

      <input
        {...rest}
        id={title}
        value={value}
       className="block w-[265px] h-[48px] rounded-[30px] p-[14px] pr-[38px] outline-none placeholder:text-[#262626]"
      />
       <div className='flex gap-[4px] absolute  right-[14px] top-[14px] '>
          <Search className="stroke-black fill-none w-[18px] h-[18px]" />
      </div>
    </div>
  );
});

TextInput.displayName = 'TextInput';

export default TextInput;
