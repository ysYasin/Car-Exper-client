import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import NavBar from "../Shared/NavBar/NavBar";
import Hero from "../Shared/HeroOfAll/Hero";
import Swal from "sweetalert2";
import Footer from "../Shared/Footer/Footer";

const Booking = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const navigate = useNavigate();

  const handleSubmitAppoinment = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const perpas = form.perpas.value;
    const date = form.date.value;
    const message = form.message.value;

    const appoinment = { name, img: service.img, email, perpas, date, message };

    fetch("http://localhost:5300/appoinments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appoinment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Your appoinment is Upoded , please wait for confirmation ",
            icon: "success",
            confirmButtonText: "Thanks",
          });
          navigate("/");
        }
      });
  };

  return (
    <div className="bg-white">
      <NavBar></NavBar>
      <Hero
        img={service?.img}
        from={"Home / Booking"}
        headText={service?.title}
      ></Hero>

      <form
        onSubmit={handleSubmitAppoinment}
        className="card-body mb-16 w-full py-20 rounded-lg bg-base-200 px-44"
      >
        <div className="flex items-center gap-7 justify-center">
          <div className="w-1/2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                defaultValue={user?.displayName ? user.displayName : ""}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                readOnly
                defaultValue={user?.email}
                required
              />
            </div>
          </div>
          <div className="w-1/2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Perpas</span>
              </label>
              <input
                type="text"
                name="perpas"
                placeholder="Perpas"
                defaultValue={service.title}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Apoinment Date</span>
              </label>
              <input
                type="date"
                name="date"
                className="input input-bordered"
                required
              />
            </div>
          </div>
        </div>
        <textarea
          name="message"
          className="textarea mt-6 text-lg textarea-bordered resize-none"
          rows="5"
          placeholder="What service you need"
        ></textarea>
        <div className="form-control mt-6">
          <button
            type="submit"
            className="btn btn-primary text-white hover:border-[#dd4628] hover:bg-[#dd4628] border-[#ff3811] bg-[#ff3811]"
          >
            Confirm appoinment
          </button>
        </div>
      </form>
      <Footer></Footer>
    </div>
  );
};

export default Booking;
