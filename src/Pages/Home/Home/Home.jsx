import React from "react";
import Baner from "../Baner/Baner";
import AboutUs from "../AboutUs/AboutUs";
import Services from "../Services/Services";
import ContactOverviw from "../ContactOverviw/ContactOverviw";
import Team from "../Team/Team";
import BrowsProducts from "./BowsProducts/BrowsProducts";
import CareFeatures from "../CareFeatures/CareFeatures";

const Home = () => {
  return (
    <div>
      <Baner></Baner>
      <AboutUs></AboutUs>
      <Services></Services>
      <ContactOverviw></ContactOverviw>
      <BrowsProducts></BrowsProducts>
      <CareFeatures></CareFeatures>
      <Team></Team>
    </div>
  );
};

export default Home;
