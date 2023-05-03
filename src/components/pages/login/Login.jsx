import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from "../../../assets/login.jpg";
import { AuthContext } from "../../../provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState(null);
  const { loginHandler, googleHandler, githubHandler } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  console.log(location);
  const formHandler = (event) => {
    event.preventDefault();
    setError(null);

    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    if (!email) {
      setError("email is required");
    }
    if (!password) {
      setError("password is required");
    }
    if (email && password) {
      loginHandler(email, password)
        .then((res) => {
          const loggedUser = res.user;
          console.log(loggedUser);
          form.reset();
          navigate(from, { replace: true });
        })
        .catch((err) => setError("user not found"));

      // console.log(userName, photo);
    }
  };

  const googleBtnHandler = () => {
    googleHandler()
      .then((res) => {
        const loggedUser = res.user;
        console.log(loggedUser);
      })
      .catch((err) => {
        const errorMessage = err.message;
        setError(errorMessage);
      });
  };

  const githubBtnHandler = () => {
    githubHandler().then((res) => {
      const loggedUser = res.user;
      console.log(loggedUser);
    });
  };

  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-200">
          <form onSubmit={formHandler} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="text-red-700">{error}</span>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-[#292524] hover:btn-[#0e0000">
                Login
              </button>
            </div>
          </form>

          <div className="card-body pt-0 mt-[-1.5rem]">
            <div className="form-control">
              <button
                onClick={googleBtnHandler}
                className="btn btn-[#292524] hover:btn-[#0e0000"
              >
                <FaGoogle className="mr-2"></FaGoogle>Login with Google
              </button>
            </div>
            <div className="form-control">
              <button
                onClick={githubBtnHandler}
                className="btn btn-[#292524] hover:btn-[#0e0000"
              >
                <FaGithub className="mr-2"></FaGithub>Login with Github
              </button>
            </div>
            <div className="form-control">
              <label className="label">
                <Link to="/register" className="label-text-alt link link-hover">
                  Don't have an account?
                </Link>
              </label>
            </div>
          </div>
        </div>

        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center mb-4">
            Login Your account
          </h1>
          <img
            className="w-1/2 h-1/2 mx-auto"
            src={loginImage}
            alt="loginImage"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
