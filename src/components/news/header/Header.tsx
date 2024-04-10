import Logo from '@/components/main/icons/Logo';
import User from '@/components/main/icons/User';
import Link from 'next/link';

const Header = () => {
  return (
    <div className=" w-full ">
      <nav className="flex justify-between text-[#262626] items-center pt-[16px] container ">
        <Link href={`/`} className="">
          <div className="flex items-center text-[#262626] text-[28px] not-italic mt-0 text-left font-bold leading-[1] ">
            petl
            <Logo className="w-[23px] h-[23px] fill-[#F6B83D]" />
            ve
          </div>
        </Link>
        <div className="flex gap-[10px] text-[16px] leading-[1.25]">
          <Link
            href={'news'}
            className=" h-[50px] border border-solid border-[rgba(38, 38, 38, 0.15)] rounded-[30px] flex items-center px-[20px] py-[15px] justify-center  overflow-hidden"
          >
            News
          </Link>
          <Link
            href={''}
            className=" h-[50px] border border-solid border-[rgba(38, 38, 38, 0.15)] rounded-[30px] flex items-center px-[20px] py-[15px] justify-center overflow-hidden"
          >
            Find pet
          </Link>
          <Link
            href={''}
            className=" h-[50px] border border-solid border-[rgba(38, 38, 38, 0.15)] flex items-center rounded-[30px] px-[20px] py-[15px] justify-center overflow-hidden"
          >
            Our friends
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <Link
            href={''}
            className="text-[16px] uppercase font-bold  h-[50px] bg-[#f6b83d] [border:1px_solid_#ffffff] rounded-[30px] flex items-center px-[35px] py-[15px] justify-center overflow-hidden text-[#ffffff]"
          >
            Log Out
          </Link>
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
