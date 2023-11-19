import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5300/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-28" id="services">
      <div className="text-center space-y-4">
        <h3 className="text-2xl text-[#FF3811] font-bold">servicees</h3>
        <h1 className="text-5xl font-bold">Our Service Area</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid gap-y-6 w-[90%] mx-auto mt-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="flex items-center my-16">
        <button className="btn mx-auto btn-outline hover:bg-[#ff3811] text-[#FF3811] outline-[#ff3811]">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
