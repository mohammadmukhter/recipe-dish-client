import React from "react";

const ChefCard = ({ data }) => {
  console.log(data);
  const { id, name, imageUrl, likes, yearsOfExperience, recipes } = data;
  return (
    <div className="card card-side bg-base-100 shadow-xl h-72 w-96">
      <figure>
        <img className="w-60 h-full" src={imageUrl} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Experiences: {yearsOfExperience} Years</p>
        <p>Recipes: {recipes.length}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Recipes</button>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
