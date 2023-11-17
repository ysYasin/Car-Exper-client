import NavBar from "../Shared/NavBar/NavBar";
import { FaGoogle } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.config";

const Signup = () => {
  const { createUserByPass, googleSignin } = useContext(AuthContext);
  const navigate = useNavigate();

  const hangleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    const cpassword = form.cpassword.value;
    if (password !== cpassword) {
      return;
    }

    createUserByPass(email, password)
      .then((result) => {
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // console.log(result.user);
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // google sign in
  const handleGoogleSignIn = () => {
    googleSignin()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <NavBar></NavBar>
      <div className="hero">
        <div className="hero-content flex-col justify-between lg:flex-row">
          <div className="w-1/2 mr-10">
            <img
              src="/assets/images/login/login.svg"
              className="me-16"
              alt=""
            />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={hangleLogin} className="card-body">
              <h3 className="text-center text-4xl my-6 font-bold">Sign Up</h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  name="cpassword"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn text-white btn-primary bg-[#ff3811] hover:bg-[#ff664e] "
                >
                  Sign In
                </button>
              </div>
            </form>

            <div className="text-center my-7 w-full">
              <p className="text-slate-600">Or Sign in with</p>
              <ul className="list-none flex items-center justify-center gap-3">
                <li>
                  <button
                    onClick={handleGoogleSignIn}
                    className="btn btn-circle"
                  >
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
              </ul>
              <p>
                Allready have an account?{" "}
                <Link to="/login" className="text-[#ff3811] font-semibold">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
