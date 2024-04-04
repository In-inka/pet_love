import Link from 'next/link';
import Logo from '../icons/Logo';
import User from '../icons/User';

const Header = () => {
  return (
    <div className="bg-[#F6B83D] rounded-tl-[60px] rounded-tr-[60px] ">
      <nav className="flex justify-between text-[#ffffff] items-center pt-[16px] container ">
        <Link href={'/'} className="">
          <div className="flex items-center text-[#ffffff] text-[28px] not-italic mt-0 text-left font-bold leading-[1] ">
            petl
            <Logo className="w-[23px] h-[23px]" />
            ve
          </div>
        </Link>
        <div className="flex gap-[10px] text-[16px] leading-[1.25]">
          <Link
            href={''}
            className=" h-[50px] [border:1px_solid_#ffffff] rounded-[30px] flex items-center px-[20px] py-[15px] justify-center  overflow-hidden"
          >
            News
          </Link>
          <Link
            href={''}
            className=" h-[50px] [border:1px_solid_#ffffff] rounded-[30px] flex items-center px-[20px] py-[15px] justify-center overflow-hidden"
          >
            Find pet
          </Link>
          <Link
            href={''}
            className=" h-[50px] [border:1px_solid_#ffffff] flex items-center rounded-[30px] px-[20px] py-[15px] justify-center overflow-hidden"
          >
            Our friends
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <User />
          <p className="font-bold text-[20px] leading-[1] ">Anna</p>
        </div>
        {/*         <div className="flex gap-2">
          {' '}
          <Link
            href={''}
            className="font-bold  h-[50px] [border:1px_solid_#ffffff] rounded-[30px] flex items-center px-[20px] py-[15px] justify-center overflow-hidden"
          >
            Log In
          </Link>
          <Link
            href={''}
            className="font-bold  h-[50px] [border:1px_solid_#ffffff] flex items-center rounded-[30px] px-[20px] py-[15px] justify-center overflow-hidden text-[#f6b83d] bg-[#fff4df]"
          >
            Registration
          </Link>
        </div> */}
      </nav>
    </div>
  );
};
export default Header;
