import React from "react";
import image1 from "/assets/images/banner/1.jpg";
import image2 from "/assets/images/banner/2.jpg";
import image3 from "/assets/images/banner/3.jpg";
import image4 from "/assets/images/banner/4.jpg";
import image5 from "/assets/images/banner/5.jpg";
import image6 from "/assets/images/banner/6.jpg";
import CaroselButton from "./CaroselButton";
import SliderText from "./SliderText";

const Baner = () => {
  return (
    <div className="carousel w-full mb-4">
      <div
        id="slide1"
        className="carousel-item overflow-hidden rounded-2xl h-[600px] relative w-full"
      >
        <img src={image1} className="w-full h-[110%]" />
        <SliderText></SliderText>
        <CaroselButton right={"#slide2"} left={"#slide6"}></CaroselButton>
      </div>
      <div
        id="slide2"
        className="carousel-item overflow-hidden rounded-2xl h-[600px] relative w-full"
      >
        <img src={image2} className="w-full h-[110%]" />
        <SliderText></SliderText>
        <CaroselButton left={"#slide1"} right={"#slide3"}></CaroselButton>
      </div>
      <div
        id="slide3"
        className="carousel-item overflow-hidden rounded-2xl h-[600px] relative w-full"
      >
        <img src={image3} className="w-full h-[110%]" />
        <SliderText></SliderText>
        <CaroselButton left={"#slide2"} right={"#slide4"}></CaroselButton>
      </div>
      <div
        id="slide4"
        className="carousel-item overflow-hidden rounded-2xl h-[600px] relative w-full"
      >
        <img src={image4} className="w-full h-[110%]" />
        <SliderText></SliderText>
        <CaroselButton left={"#slide3"} right={"#slide5"}></CaroselButton>
      </div>
      <div
        id="slide5"
        className="carousel-item overflow-hidden rounded-2xl h-[600px] relative w-full"
      >
        <img src={image5} className="w-full h-[110%]" />
        <SliderText></SliderText>
        <CaroselButton left={"#slide4"} right={"#slide6"}></CaroselButton>
      </div>
      <div
        id="slide6"
        className="carousel-item overflow-hidden rounded-2xl h-[600px] relative w-full"
      >
        <img src={image6} className="w-full h-[110%]" />
        <SliderText></SliderText>
        <CaroselButton left={"#slide5"} right={"#slide1"}></CaroselButton>
      </div>
    </div>
  );
};

export default Baner;
