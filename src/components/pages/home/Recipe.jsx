import React from "react";
import { useLoaderData } from "react-router-dom";
import RecipeTable from "./RecipeTable";

const Recipe = () => {
  const loaderData = useLoaderData();
  const { id, name, imageUrl, yearsOfExperience, bio, recipes, likes } =
    loaderData;
  console.log(loaderData);
  return (
    <div>
      <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={imageUrl}
            className="w-60 h-72 object-cover rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">{bio}</p>
            <div className="flex items-center">
              <div className="flex-grow">
                <p>Recipes: {recipes.length}</p>
                <p>Experiences: {yearsOfExperience} years</p>
              </div>
              <div>
                <p>Likes: {likes}</p>
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
