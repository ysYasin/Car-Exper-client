import NavBar from "../Shared/NavBar/NavBar";
import { FaGoogle } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const { login, googleSignin } = useContext(AuthContext);
  const navigate = useNavigate();

  const hangleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((user) => {
        console.log(user);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
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
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 mr-10">
            <img
              src="/assets/images/login/login.svg"
              className="me-16"
              alt=""
            />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={hangleLogin} className="card-body">
              <h3 className="text-center text-4xl my-6 font-bold">Login</h3>
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
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn text-white btn-primary bg-[#ff3811] hover:bg-[#ff664e] "
                >
                  Login
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
                Don't have an account?{" "}
                <Link to="/signup" className="text-[#ff3811] font-semibold">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
