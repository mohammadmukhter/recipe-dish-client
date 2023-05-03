import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import React from "react";
import { toast } from "react-toastify";

const RecipeTable = ({ recipes }) => {
  let i = 1;
  console.log(recipes);

  const favoriteHandler = (event, name) => {
    event.currentTarget.disabled = true;
    toast(`${name} added to favorite list`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className=" md:table-auto w-full border-collapse border border-slate-500">
          {/* head*/}
          <thead>
            <tr>
              <th className="border border-slate-500 p-2">No</th>
              <th className="border border-slate-500 p-2">Recipe Name</th>
              <th className="border border-slate-500 p-2">Ingredients</th>
              <th className="border border-slate-500 p-2">Cooking Method</th>
              <th className="border border-slate-500 p-2">Rating</th>
              <th className="border border-slate-500 p-2">Action</th>
            </tr>
          </thead>
          <tbody className="border-collapse ">
            {/* row 1 */}

            {recipes.map((data) => {
              //   console.log(data.recipeId);
              return (
                <tr key={data.recipeId}>
                  <th key={data.id} className="border border-slate-500 p-2">
                    {i++}
                  </th>
                  <td className="border border-slate-500 p-2">{data.name}</td>
                  <td className="border border-slate-500 p-2">
                    {data.ingredients.map((x, idx) => (
                      <span key={idx}>
                        {x}
                        {","}
                      </span>
                    ))}
                  </td>
                  <td className="border border-slate-500 p-2">
                    {data.cookingMethod}
                  </td>
                  <td className="border border-slate-500 p-2">
                    {data.rating}
                    <div>
                      <div style={{ maxWidth: 180, width: "100%" }}>
                        <Rating
                          readOnly
                          value={data.rating}
                          key={data.rating}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="border border-slate-500 p-2">
                    <button
                      onClick={(e) => favoriteHandler(e, data.name)}
                      className="btn btn-danger disabled:bg-gray-200 disabled:text-gray-400"
                    >
                      Favorite
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecipeTable;
