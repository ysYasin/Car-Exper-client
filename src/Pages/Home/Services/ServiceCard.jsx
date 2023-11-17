import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Service card" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-semibold">{title}</h2>
        <div className="card-actions flex justify-between">
          <p className="text-[#ff3811]">Price : ${price}</p>
          <Link to={`services/${_id}`}>
            <button className="text-red-600">
              {" "}
              <FaArrowRight width={"2rem"} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
