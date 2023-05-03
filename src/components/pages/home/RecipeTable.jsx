import React from "react";

const RecipeTable = ({ recipes }) => {
  let i = 1;
  console.log(recipes);

  const favoriteHandler = (id) => {
    console.log(id);
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
                  <td className="border border-slate-500 p-2">{data.rating}</td>
                  <td className="border border-slate-500 p-2">
                    <button
                      onClick={() => favoriteHandler(data.recipeId)}
                      className="btn btn-danger"
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
<div className="overflow-x-auto">
  <table className="table w-full">
    {/* head*/}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      {/* row 2 */}
      <tr className="active">
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>;
