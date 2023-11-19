import React from "react";
import {
  FaClock,
  FaGear,
  FaHandPeace,
  FaHeadset,
  FaPeopleGroup,
  FaTruckFast,
} from "react-icons/fa6";

const CareFeatures = () => {
  return (
    <div>
      <div className="text-center space-y-4">
        <h3 className="text-2xl text-[#FF3811] font-bold">Care Features</h3>
        <h1 className="text-7xl font-bold">Why Choose Us</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <section className="grid my-20 w-[90%] mx-auto grid-cols-2 gap-6 sm:gap-8 md:grid-cols-3 lg:grid-cols-6">
        <div className="p-3 bg-slate-200 gap-3 hover:bg-[#ff3811] hover:text-white flex flex-col items-center justify-center rounded-md">
          <FaPeopleGroup className="text-7xl" />
          <h2 className=" font-bold">Expert Team</h2>
        </div>
        <div className="p-3 bg-slate-200 gap-3 hover:bg-[#ff3811] hover:text-white flex flex-col items-center justify-center rounded-md">
          <FaClock className="text-7xl" />
          <h2 className=" font-bold">Timely Delivery</h2>
        </div>
        <div className="p-3 bg-slate-200 gap-3 hover:bg-[#ff3811] hover:text-white flex flex-col items-center justify-center rounded-md">
          <FaHeadset className="text-7xl" />
          <h2 className=" font-bold">24/7 Support</h2>
        </div>
        <div className="p-3 bg-slate-200 gap-3 hover:bg-[#ff3811] hover:text-white flex flex-col items-center justify-center rounded-md">
          <FaGear className="text-7xl" />
          <h2 className=" font-bold">Best Equipment</h2>
        </div>
        <div className="p-3 bg-slate-200 gap-3 hover:bg-[#ff3811] hover:text-white flex flex-col items-center justify-center rounded-md">
          <FaHandPeace className="text-7xl" />
          <h2 className=" font-bold">100% Guranty</h2>
        </div>
        <div className="p-3 bg-slate-200 gap-3 hover:bg-[#ff3811] hover:text-white flex flex-col items-center justify-center rounded-md">
          <FaTruckFast className="text-7xl" />
          <h2 className=" font-bold">Timely Delivery</h2>
        </div>
      </section>
    </div>
  );
};

export default CareFeatures;
