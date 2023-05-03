import React from "react";
import { Link } from "react-router-dom";
import loginImage from "../../../assets/login.jpg";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-200">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
                placeholder="password"
                className="input input-bordered"
              />

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-[#292524] hover:btn-[#0e0000">
                Login
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
