'use client';

const Hero = () => {

  return (
    <section className="bg-[#F6B83D] rounded-bl-[60px] rounded-br-[60px] w-full ">
      <div className="container text-[#ffffff] ">
        <div className="flex gap-[73px] pt-[112px] items-end pb-[35px] justify-between">
          <h1 className="text-[90px] w-[760px] leading-[0.96]  ">
            Take good <span className="text-white text-opacity-40">care</span>{' '}
            of your small pets
          </h1>
          <p className="w-[255px] text-[18px]  leading-[1.22] font-medium ">
            Choosing a pet for your home is a choice that is meant to enrich
            your life with immeasurable joy and tenderness.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
