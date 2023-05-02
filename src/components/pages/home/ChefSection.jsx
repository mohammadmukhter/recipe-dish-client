import React from "react";
import ChefCard from "./ChefCard";

const ChefSection = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center">List of Our Chefs</h1>
      <div className="grid grid-cols-3 my-4 gap-4 mx-4">
        <ChefCard></ChefCard>
        <ChefCard></ChefCard>
        <ChefCard></ChefCard>
      </div>
    </div>
  );
};

export default ChefSection;
