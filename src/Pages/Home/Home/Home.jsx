import React from "react";
import Baner from "../Baner/Baner";
import AboutUs from "../AboutUs/AboutUs";
import Services from "../Services/Services";
import ContactOverviw from "../ContactOverviw/ContactOverviw";

const Home = () => {
  return (
    <div>
      <Baner></Baner>
      <AboutUs></AboutUs>
      <Services></Services>
      <ContactOverviw></ContactOverviw>
    </div>
  );
};

export default Home;
