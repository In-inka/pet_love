import Link from 'next/link';

const Header = () => {
  return (
    <div className="bg-[#F6B83D] ">
      <nav className="flex justify-between text-[#ffffff] items-center py-[16px] container ">
        <div>Logo</div>
        <div className="flex gap-[10px] text-[16px] ">
          <Link
            href={''}
            className=" h-[50px] [border:1px_solid_#ffffff] rounded-[30px] px-[20px] py-[15px] justify-center "
          >
            News
          </Link>
          <Link
            href={''}
            className=" h-[50px] [border:1px_solid_#ffffff] rounded-[30px] px-[20px] py-[15px] justify-center"
          >
            Find pet
          </Link>
          <Link
            href={''}
            className=" h-[50px] [border:1px_solid_#ffffff] rounded-[30px] px-[20px] py-[15px] justify-center"
          >
            Our friends
          </Link>
        </div>
        <div>
          <p className="font-bold text-[20px]">Anna</p>
        </div>
      </nav>
    </div>
  );
};
export default Header;
