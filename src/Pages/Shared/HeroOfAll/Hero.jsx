import "./hero.css";
const Hero = ({ img, headText, from }) => {
  return (
    <div className="my-16">
      <div className="h-[400px] w-full">
        <div className=" h-full overflow-hidden rounded-xl relative w-full">
          <img src={img} width={"100%"} alt="Service" className="" />
          <div className="w-full absolute left-0 top-0 h-full ps-5 py-28 bg-gradient-to-r from-[#151515] to-[#15151503] text-white gap-4 space-y-5">
            <h1 className="text-white font-bold text-5xl ps-24 py-1/2">
              {headText}
            </h1>
          </div>
          <div className="absolute triangle bottom-1 left-1/3 mx-auto text-center">
            <h1 className="text-3xl font-semibold text-[#fff]">{from}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
