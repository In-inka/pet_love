const PictureHero = () => {
  return (
    <section className=" w-full h-auto">
      <picture>
        <source
          srcSet="/images/main/hero.jpg"
          media="(orientation: portrait)"
        />
        <img
          src="/images/main/hero.jpg"
          alt="hero"
          className="w-full h-auto m-0 block  rounded-[60px]"
        />
      </picture>
    </section>
  );
};

export default PictureHero;
