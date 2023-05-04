import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const ChefCard = ({ data }) => {
  // console.log(data);
  const { id, name, imageUrl, likes, yearsOfExperience, recipes } = data;
  return (
    <div className="card card-side bg-base-100 shadow-xl h-72 w-full md:w-96">
      <figure>
        <LazyLoad width={240} threshold={0.95}>
          <img className="w-60 h-full object-cover" src={imageUrl} alt="" />
        </LazyLoad>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Experiences: {yearsOfExperience} Years</p>
        <p>Recipes: {recipes.length}</p>
        <p>
          <FaThumbsUp className="inline"></FaThumbsUp> {likes}
        </p>
        <div className="card-actions justify-end">
          <Link
            to={`/recipe/${id}`}
            className="btn bg-[#292524] hover:bg-[#0e0d0d]"
          >
            View Recipes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
