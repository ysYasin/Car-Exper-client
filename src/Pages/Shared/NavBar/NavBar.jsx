import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
  };

  const navLinks = (
    <>
      <li>
        <Link to={"/"} className="text-xl font-semibold">
          Home
        </Link>
      </li>
      <li>
        <Link to={"/about"} className="text-xl font-semibold">
          About
        </Link>
      </li>
      <li>
        <a href="#services" className="text-xl font-semibold">
          Services
        </a>
      </li>
      <li>
        <Link to={"/blog"} className="text-xl font-semibold">
          Blog
        </Link>
      </li>

      {user ? (
        <>
          <li>
            <button className="text-xl font-semibold" onClick={handleLogout}>
              Logout
            </button>
          </li>{" "}
          <li>
            <Link to={`/bookedItem`} className="text-xl font-semibold">
              My Booking's
            </Link>
          </li>
        </>
      ) : (
        <li>
          <Link className="text-xl font-semibold" to="/login">
            Login
          </Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar h-20 mb-4 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>

        <Link to="/" className="btn btn-ghost text-xl">
          <img src="/assets/logo.svg" width={"80px"} alt="" />
        </Link>
      </div>
      <div className="hidden lg:flex navbar-center">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <Link to="">
          <button className="btn btn-outline hover:bg-[#ff3811] text-[#FF3811] outline-[#ff3811]">
            Appoinment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
