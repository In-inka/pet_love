import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const PrimaryButton: React.FC<ButtonProps> = ({
  text,
  ...props
}) => {
  return (
    <button
      {...props}
      className="h-[48px] w-[257px] rounded-[30px] border  text-white   bg-[#F6B83D] text-[16px] "
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
