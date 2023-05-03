import React from "react";
import popular1 from "../../../assets/popular1.jpg";
import popular2 from "../../../assets/popular2.jpg";
import popular3 from "../../../assets/popular3.jpg";

const PopularRecipe = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center mt-12 my-8">
        Popular Recipes
      </h1>

      <div className="flex flex-col md:flex-row gap-4 justify-center ">
        <div className="card mx-auto w-96 bg-base-100 shadow-xl">
          <figure>
            <img className="w-full h-72" src={popular1} alt="chicken tanduri" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Chicken tanduri
              <div className="badge badge-[#0e0d0d]">popular</div>
            </h2>
            <p>
              chicken Tanduri is most famous indian food . which is most
              delicious food
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">indian food</div>
            </div>
          </div>
        </div>
        <div className="card w-96 mx-auto bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full h-72"
              src={popular2}
              alt="hydrabadi biriyani"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Hydrabadi biriyani
              <div className="badge badge-[#0e0d0d]">popular</div>
            </h2>
            <p>
              Hydrabadi biriyani another most food in whole indian as well as
              bangladesh, pakistan also.
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">indian food</div>
            </div>
          </div>
        </div>
        <div className="card w-96 mx-auto bg-base-100 shadow-xl">
          <figure>
            <img className="w-full h-72" src={popular3} alt="Palak panir" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Palak panir
              <div className="badge badge-[#0e0d0d]">popular </div>
            </h2>
            <p>
              Its mainly make with panir . its very delicious and healthy food.
              Its is most popular food in india
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">indian food</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularRecipe;
