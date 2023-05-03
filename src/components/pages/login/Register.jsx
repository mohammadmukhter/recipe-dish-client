import { updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import registerImage from "../../../assets/register.jpg";
import { AuthContext } from "../../../provider/AuthProvider";

const Register = () => {
  const [error, setError] = useState(null);
  const { registerHandler } = useContext(AuthContext);
  //   console.log(registerHandler);

  const formHandler = (event) => {
    event.preventDefault();
    setError(null);
    const form = event.target;

    const userName = form.user_name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const confirmPassword = form.confirm_password.value;

    if (password !== confirmPassword) {
      setError("password does not matched");
    }
    if (password.length < 6) {
      setError("password must be 6 character or more than 6 character");
    }
    if (password.length == 0) {
      setError("password is required");
    }
    if (email.length == 0) {
      setError("email is required");
    }

    if (
      password.length >= 6 &&
      email.length != 0 &&
      password != 0 &&
      password === confirmPassword
    ) {
      registerHandler(email, password)
        .then((res) => {
          const registeredUser = res.user;
          updateHandler(res.user, userName, photo);
          console.log(registeredUser);
          form.reset();
          setError(null);
        })
        .catch((err) => console.log(err));

      // console.log(userName, photo);
    }
  };

  //   user update handler
  const updateHandler = (currentUser, userName, photo) => {
    updateProfile(currentUser, {
      displayName: `${userName}`,
      photoURL: `${photo}`,
    })
      .then(() => console.log("updated successfully"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="hero min-h-screen bg-white py-6">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-200">
          <form onSubmit={formHandler} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                name="user_name"
                type="text"
                placeholder="User Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                name="confirm_password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-red-700">{error}</span>
              </label>
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
          </form>
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
