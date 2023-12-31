import React from "react";
import { Link } from "react-router-dom";

const ContactForm = () => {
  return (
    <div>
      <section className="mb-12 text-gray-800 mt-32">
        <div className="flex flex-wrap">
          <div className="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
            <h2 className="text-3xl font-bold mb-6">Contact us</h2>
            <p className="text-gray-500 mb-6">
              RecipeDish is more popular for unique recipe and cooking services.
              please feel free to contact with us for any query.
            </p>
            <p className="text-gray-500 mb-2">kolkata, 1000/street, India</p>
            <p className="text-gray-500 mb-2">+ 0111 234 567 89</p>
            <p className="text-gray-500 mb-2">recipedish@info.com</p>
          </div>
          <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
            <form>
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-[#292524] focus:outline-none"
                  id="exampleInput7"
                  placeholder="Name"
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="email"
                  className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-[#292524] focus:outline-none"
                  id="exampleInput8"
                  placeholder="Email address"
                />
              </div>
              <div className="form-group mb-6">
                <textarea
                  className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-[#292524] focus:outline-none
            "
                  id="exampleFormControlTextarea13"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="form-group form-check text-center mb-6">
                <input
                  type="checkbox"
                  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#292524] checked:border-[#292524] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                  id="exampleCheck87"
                />
                <label
                  className="form-check-label inline-block text-gray-800"
                  htmlFor="exampleCheck87"
                >
                  Send me a copy of this message
                </label>
              </div>
              <Link>
                <button
                  className="
            w-full
            px-6
            py-2.5
            bg-[#292524]
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-[#0e0d0d] hover:shadow-lg
            focus:bg-[#0e0d0d] focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-[#0e0d0d] active:shadow-lg
            transition
            duration-150
            ease-in-out"
                >
                  Send
                </button>
              </Link>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
