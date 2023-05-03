import React from "react";
import { Link } from "react-router-dom";
import registerImage from "../../../assets/register.jpg";

const Register = () => {
  return (
    <div className="hero min-h-screen bg-white py-6">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-200">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                placeholder="User Name"
                className="input input-bordered"
              />
            </div>
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
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
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
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-[#292524] hover:btn-[#0e0000">
                Register
              </button>
            </div>

            <div className="form-control">
              <label className="label">
                <Link to="/login" className="label-text-alt link link-hover">
                  Already have an account?
                </Link>
              </label>
            </div>
          </div>
        </div>

        <div className="text-center lg:text-left pt-0">
          <h1 className="text-5xl font-bold text-center mb-4">
            Please Register
          </h1>
          <img
            className="w-3/4 h-3/4 mx-auto"
            src={registerImage}
            alt="registerImage"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
