import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";
import Swal from "sweetalert2";
import Hero from "../Shared/HeroOfAll/Hero";

const BookedItems = () => {
  const [bookeds, setBookeds] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5300/appoinments?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBookeds(data);
      });
  }, []);

  const handleDelet = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5300/appoinments/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remaining = bookeds.filter((booking) => booking._id !== id);
              setBookeds(remaining);
            }
          });
      }
    });
  };

  //handleUpdate
  const handleUpdate = (id) => {
    fetch(`http://localhost:5300/appoinments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "Confirmed" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = bookeds.filter((booked) => booked._id !== id);
          let updated = bookeds.find((booked) => booked._id === id);
          updated.status = "Confirmed";
          setBookeds([updated, ...remaining]);
        }
      });
  };

  return (
    <div className="">
      <NavBar></NavBar>
      <Hero
        img={"assets/images/banner/5.jpg"}
        from={"Home / BookedItem"}
        headText={"You'r service's update"}
      ></Hero>
      <div className="overflow-x-auto">
        <table className="table w-[80%] shadow-lg border-2 p-4 mx-auto my-8">
          {bookeds &&
            bookeds.map((book) => {
              return (
                <tbody key={book._id}>
                  <tr>
                    <th>
                      <button
                        onClick={() => handleDelet(book._id)}
                        className="btn btn-circle"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </th>
                    <td>
                      <div className="avatar">
                        <div className="rounded  w-20 h-20">
                          {book?.img ? (
                            <img
                              src={book.img}
                              alt="Avatar Tailwind CSS Component"
                            />
                          ) : (
                            <div className="skeleton w-32 h-32"></div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td>{book?.name}</td>
                    <td>{book?.perpas}</td>
                    <td>{book?.email}</td>
                    <td>{book?.date}</td>
                    <th>
                      {book.status ? (
                        <h3 className="text-lx text-primary font-semibold">
                          {book.status}
                        </h3>
                      ) : (
                        <button
                          onClick={() => handleUpdate(book._id)}
                          className="btn btn-ghost bg-[#a3a3a3] btn-xs"
                        >
                          Confirm
                        </button>
                      )}
                    </th>
                  </tr>
                </tbody>
              );
            })}
        </table>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BookedItems;
