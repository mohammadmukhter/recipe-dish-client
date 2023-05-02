import React from "react";

const RecipeTable = ({ recipes }) => {
  console.log(recipes);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-slate-500">
          {/* head*/}
          <thead>
            <tr className="border-collapse border border-slate-500">
              <th>No</th>
              <th>Recipe Name</th>
              <th>Ingredients</th>
              <th>Cooking Method</th>
              <th>Rating</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="border-collapse border border-slate-500">
            {/* row 1 */}
            {recipes.map((data) => {
              return (
                <tr>
                  <th>1</th>
                  <td>{data.name}</td>
                  <td>
                    {data.ingredients.map((x) => (
                      <span>
                        {x}
                        {","}
                      </span>
                    ))}
                  </td>
                  <td>{data.cookingMethod}</td>
                  <td>{data.rating}</td>
                  <td>
                    <button className="btn btn-danger">Favorite</button>
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
