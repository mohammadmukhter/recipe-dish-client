import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import recipeImage from "../../../assets/recipeBanner.jpg";
import RecipeTable from "./RecipeTable";

const Recipe = () => {
  const navigate = useNavigate();
  const loaderData = useLoaderData();
  const { id, name, imageUrl, yearsOfExperience, bio, recipes, likes } =
    loaderData;

  if (!loaderData) {
    return (
      <div className="text-center text-red-700 font-bold text-3xl bg-white p-4">
        No Data Found!
      </div>
    );
  }
  return (
    <div>
      <div className="hero bg-base-200">
        <div
          className="hero-content flex-col lg:flex-row bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${recipeImage})` }}
        >
          <img
            src={imageUrl}
            className="w-60 h-72 object-cover rounded-lg shadow-2xl"
          />

          <div className="text-white px-12 mr-12">
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">{bio}</p>
            <div className="flex items-center">
              <div className="flex-grow">
                <p>
                  Recipes:{" "}
                  <span className="font-bold text-lg text-green-400 ms-1">
                    {recipes?.length}
                  </span>
                </p>
                <p>
                  Experiences:
                  <span className="font-bold text-lg text-green-400 ms-1">
                    {yearsOfExperience}
                  </span>{" "}
                  years
                </p>
              </div>
              <div>
                <p>
                  <FaThumbsUp className="inline" />{" "}
                  <span className="font-bold text-lg text-red-300 ms-1">
                    {likes}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-12">
        <h2 className="text-3xl font-semibold my-4">Recipes List </h2>
        <RecipeTable recipes={recipes}></RecipeTable>
      </div>
    </div>
  );
};

export default Recipe;
