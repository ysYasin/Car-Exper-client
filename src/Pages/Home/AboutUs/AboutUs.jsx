import React from "react";

const AboutUs = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <img
            src="/assets/images/about_us/person.jpg"
            className="max-w-sm rounded-lg h-[400px] shadow-2xl"
          />
          <img
            src="/assets/images/about_us/parts.jpg"
            className="max-w-sm rounded-lg absolute right-5 border-[1rem] border-white top-1/2"
          />
        </div>
        <div className="w-1/2 px-5 pt-5 space-y-5">
          <h3 className="text-3xl font-extrabold text-[#FF3811]">About Us</h3>
          <h1 className="text-5xl font-bold w-3/4">
            We are qualified & of experience in this field
          </h1>
          <p className="">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <div className="">
            <button className="btn text-white font-semibold bg-[#FF3811]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
