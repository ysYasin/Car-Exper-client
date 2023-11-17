import Rating from "react-rating";
import { FaRegStar, FaShoppingBag, FaStar } from "react-icons/fa";
import { useState } from "react";
import "./brp.css";

const ourProducts = [
  {
    img: "/assets/images/products/1.png",
    title: "Car Engine Plug",
    price: "$20.00",
  },
  {
    img: "/assets/images/products/2.png",
    title: "Car Air Filter",
    price: "$20.00",
  },
  {
    img: "/assets/images/products/3.png",
    title: "Cools Led Light",
    price: "$20.00",
  },
  {
    img: "/assets/images/products/4.png",
    title: "Cools Led Light",
    price: "$20.00",
  },
  {
    img: "/assets/images/products/5.png",
    title: "Cools Led Light",
    price: "$20.00",
  },
  {
    img: "/assets/images/products/6.png",
    title: "Cools Led Light",
    price: "$20.00",
  },
];

const BrowsProducts = () => {
  const [products, setProducts] = useState(ourProducts);
  return (
    <div className="my-24">
      <div className="text-center space-y-4">
        <h3 className="text-2xl text-[#FF3811] font-bold">Popular Products</h3>
        <h1 className="text-5xl font-bold">Browse Our Products</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid gap-y-6 w-[80%] mx-auto mt-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => {
          return (
            <div
              key="{product.img}"
              className="card w-96 bg-base-100 shadow-xl"
            >
              <figure className="px-10 relative shopping-card pt-10">
                <img
                  src={product.img}
                  alt=""
                  className=" h-[200px] w-full bg-slate-200 rounded-xl"
                />
                <button className="btn top-5 right-5 shopping-bag absolute btn-ghost">
                  <FaShoppingBag className="text-slate-500 text-2xl" />
                </button>
              </figure>
              <div className="card-body flex flex-col items-center justify-center">
                <Rating
                  readonly
                  placeholderRating={5}
                  emptySymbol={<FaRegStar className="icon text-[#ff3811]" />}
                  placeholderSymbol={
                    <FaStar className="icon text-[#ff3811] " />
                  }
                  fullSymbol={<FaStar className="icon text-[#ff3811]" />}
                />
                <h2 className="card-title font-semibold">{product.title}</h2>
                <div className="card-actions flex justify-between">
                  <p className="text-[#ff3811]">{product.price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BrowsProducts;
