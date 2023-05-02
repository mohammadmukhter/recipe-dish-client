import React, { useEffect, useState } from "react";
import imageLeft from "../../../assets/cooker.jpg";
import ChefCard from "./ChefCard";

const ChefSection = () => {
  const [chefData, setChefData] = useState([]);

  useEffect(() => {
    const dataFetcher = async () => {
      const fetched = await fetch("http://localhost:5000/chef");
      const data = await fetched.json();
      setChefData(data.chefs);
    };

    dataFetcher();
  }, []);

  //   console.log(chefData);
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center">
        Our <mark>famous</mark> Chefs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-[4fr_2fr] items-center justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 my-12 gap-8 mx-4 ">
          {chefData.map((data) => (
            <ChefCard key={data.id} data={data}></ChefCard>
          ))}
        </div>
        <div className="flex items-center justify-center order-first mt-12 md:order-last">
          <img src={imageLeft} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ChefSection;
