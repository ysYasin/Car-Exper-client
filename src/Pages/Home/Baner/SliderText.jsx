const SliderText = () => {
  return (
    <div className="w-full h-full ps-5 md:ps-24 py-28 bg-gradient-to-r from-[#151515] to-[#15151503] absolute text-white gap-4 space-y-5">
      <h1 className="w-[80%] md:w-[463px] text-4xl md:text-6xl font-extrabold">
        Affordable Price For Car Servicing
      </h1>
      <p className="w-[90%] md:w-[463px]">
        There are many variations of passages of available, but the majority
        have suffered alteration in some form
      </p>
      <div className="w-[90%] md:w-[463px] flex gap-5">
        <button className="bg-[#FF3811] text-white px-6 py-3 rounded-md font-bold hover:opacity-80">
          Discover More
        </button>
        <button className="btn btn-outline hover:bg-[#ff3811] hover:outline-[#ff3811] text-white outline-white">
          Latest Project
        </button>
      </div>
    </div>
  );
};

export default SliderText;
