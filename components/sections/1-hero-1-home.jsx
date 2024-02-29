import { contHero, statistics } from "@/content/data";
import { rcHero } from "@/public/assets/images";
import IconComponent from "@/components/ui/icons/icons";

const Hero = () => {
  return (
    <section
      id="hero"
      className="container mx-auto container-p my-2 md:my-10 lg:mt-16 flex flex-col xl:flex-row justify-center gap-0"
    >
      <div className="xl:w-1/2 xl:pr-2 text-center xl:text-left">
        <h2 className="mb-8 font-medium text-center lg:text-left md:text-lg lg:text-3xl text-primary">
          {contHero.coral1}
          <br />
          <span className="font-normal text-xs md:text-sm lg:text-xl">
            {contHero.coral2}
          </span>
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold ">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 xl:pr-12 rounded-full">
            {contHero.fline}
          </span>
          <br />
          <span className="text-primary inline-block xl:my-4">
            {contHero.span}
          </span>
        </h1>
        <p className="text-xs md:text-lg text-slate-gray leading-4 ">
          {contHero.desc}
        </p>
        <div className="flex my-8 flex-row space-x-4 justify-center xl:justify-start">
          <a href="#footer" className="btn-hero bg-primary text-white">
            {contHero.btn1}
            <IconComponent name="arrowright" size={18} color="white" />
          </a>
          <a
            href="https://rcteenx.com/cv/index.html"
            className="btn-hero bg-white text-primary hover:border-b"
          >
            <div className="bg-primary rounded-full p-1 mr-2">
              <IconComponent name="regfilealt" size={18} color="white" />
            </div>
            {contHero.btn2}
          </a>
        </div>
        <p className="text-xs mb-8 text-slate-gray leading-4 ">
          <sup>*</sup> {contHero.info}
        </p>
        {/* <div className="flex justify-start items-start flex-wrap w-full my-12 gap-8 md:gap-16">
          {statistics.map((stat) => (
            <div key={stat.id}>
              <p className="text-2xl sm:text-4xl font-bold">
                {stat.value}
              </p>
              <p className=" text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div> */}
      </div>
      {/* hidden xl:flex  bg-hero */}
      <div className="xl:w-1/2 flex flex-col justify-end items-center border bg-[url('/assets/images/ziyaretci.png')] bg-cover relative rounded-2xl">
        <img
          src={rcHero.src}
          alt="img colletion"
          width={480}
          height={400}
          className="px-4 md:border border-b-0 bg-white/10 border-black/20"
        />
        <p className="px-4 md:px-8 m-0 py-2 mb-10 text-center bg-white/20 w-full border-black border-y">
          {contHero.quote}
        </p>
      </div>
    </section>
  );
};

export default Hero;
