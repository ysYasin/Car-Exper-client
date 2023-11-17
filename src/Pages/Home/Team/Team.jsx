import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./team.css";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { FaGoogle, FaInstagram } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
//
import img1 from "/assets/images/team/1.jpg";
import img2 from "/assets/images/team/2.jpg";
import img3 from "/assets/images/team/3.jpg";

const Team = () => {
  return (
    <div className="my-24">
      <div className="text-center space-y-4">
        <h3 className="text-2xl text-[#FF3811] font-bold">Team</h3>
        <h1 className="text-5xl font-bold">Meet Our Team</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="w-[80%] mx-auto">
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide style={{ transform: "translate3d(0px, 0px, 0px)" }}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={img1} alt="Service card" className="rounded-xl" />
              </figure>
              <div className="card-body flex flex-col items-center justify-center">
                <h2 className="card-title text-center font-semibold">
                  Car Engine Plug
                </h2>
                <div className="card-actions flex justify-between">
                  <p className="text-[#747474]">Engine Expert</p>
                  <ul className="list-none my-3 w-full flex items-center justify-center gap-3">
                    <li>
                      <button className="btn btn-circle">
                        <FaGoogle className="text-2xl text-[#48f35f]" />{" "}
                      </button>
                    </li>
                    <li>
                      <button className="btn btn-circle">
                        <SiFacebook className="text-2xl text-[#3B5998]" />
                      </button>
                    </li>
                    <li>
                      <button className="btn btn-circle">
                        <FaLinkedin className="text-2xl text-[#0A66C2]" />
                      </button>
                    </li>
                    <li>
                      <button className="btn insta text-white btn-circle">
                        <FaInstagram className=" text-2xl text-[#FFF]" />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={img2} alt="Service card" className="rounded-xl" />
              </figure>
              <div className="card-body flex flex-col items-center justify-center">
                <h2 className="card-title text-center font-semibold">
                  Car Engine Plug
                </h2>
                <div className="card-actions flex justify-between">
                  <p className="text-[#747474]">Engine Expert</p>
                  <ul className="list-none my-3 w-full flex items-center justify-center gap-3">
                    <li>
                      <button className="btn btn-circle">
                        <FaGoogle className="text-2xl text-[#48f35f]" />{" "}
                      </button>
                    </li>
                    <li>
                      <button className="btn btn-circle">
                        <SiFacebook className="text-2xl text-[#3B5998]" />
                      </button>
                    </li>
                    <li>
                      <button className="btn btn-circle">
                        <FaLinkedin className="text-2xl text-[#0A66C2]" />
                      </button>
                    </li>
                    <li>
                      <button className="btn insta text-white btn-circle">
                        <FaInstagram className=" text-2xl text-[#FFF]" />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={img3} alt="Service card" className="rounded-xl" />
              </figure>
              <div className="card-body flex flex-col items-center justify-center">
                <h2 className="card-title text-center font-semibold">
                  Car Engine Plug
                </h2>
                <div className="card-actions flex justify-between">
                  <p className="text-[#747474]">Engine Expert</p>
                  <ul className="list-none my-3 w-full flex items-center justify-center gap-3">
                    <li>
                      <button className="btn btn-circle">
                        <FaGoogle className="text-2xl text-[#48f35f]" />{" "}
                      </button>
                    </li>
                    <li>
                      <button className="btn btn-circle">
                        <SiFacebook className="text-2xl text-[#3B5998]" />
                      </button>
                    </li>
                    <li>
                      <button className="btn btn-circle">
                        <FaLinkedin className="text-2xl text-[#0A66C2]" />
                      </button>
                    </li>
                    <li>
                      <button className="btn insta text-white btn-circle">
                        <FaInstagram className=" text-2xl text-[#FFF]" />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
