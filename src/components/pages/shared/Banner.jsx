import React from "react";
import bannerImage1 from "../../../assets/banner1.jpg";
import bannerImage2 from "../../../assets/banner2.jpg";
import bannerImage3 from "../../../assets/banner3.jpg";

const Banner = () => {
  return (
    <>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div
            className="hero h-auto md:min-h-screen relative object-cover bg-no-repeat"
            style={{ backgroundImage: `url(${bannerImage1})` }}
          >
            <div className=" bg-opacity-60"></div>
            <div className="absolute left-[50px] md:left-[100px] top-50% hero-content text-left text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-2xl md:text-5xl font-bold">
                  Spice Up Your Kitchen with Indian Recipes
                </h1>
                <p className="mb-5">
                  Bring the tantalizing tastes of India to your home kitchen.
                  Discover a treasure trove of easy-to-follow recipes that will
                  awaken your taste buds with bold spices, fragrant herbs, and
                  unique combinations of flavors. Experience the magic of Indian
                  cooking at your fingertips.
                </p>
                <button className="btn bg-slate-900">Explore More</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div
            className="hero min-h-screen relative"
            style={{ backgroundImage: `url(${bannerImage2})` }}
          >
            <div className=" bg-opacity-60"></div>
            <div className="absolute left-[50px] md:left-[100px] top-50% hero-content text-left text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-2xl md:text-5xl font-bold">
                  Experience the Essence of India
                </h1>
                <p className="mb-5">
                  Immerse yourself in the diverse and colorful world of Indian
                  cuisine. Uncover the secrets of
                </p>
                <button className="btn bg-slate-900">Explore more</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div
            className="hero min-h-screen relative"
            style={{ backgroundImage: `url(${bannerImage3})` }}
          >
            <div className=" bg-opacity-60"></div>
            <div className="absolute left-[50px] md:left-[100px] top-50% hero-content text-left text-dark">
              <div className="max-w-md">
                <h1 className="mb-5 text-2xl md:text-5xl font-bold">
                  Discover the Flavors of India
                </h1>
                <p className="mb-5">
                  Experience the vibrant and diverse cuisine of India with our
                  collection of authentic recipes. From spicy curries to savory
                  snacks
                </p>
                <button className="btn bg-slate-900 ">Explore more</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
