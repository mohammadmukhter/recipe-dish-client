import React, { useEffect, useState } from "react";
import imageLeft from "../../../assets/cooker.jpg";
import ChefCard from "./ChefCard";

const ChefSection = () => {
  const [loader, setLoader] = useState(true);

  const [chefData, setChefData] = useState([]);

  useEffect(() => {
    const dataFetcher = async () => {
      const fetched = await fetch(
        "https://recipe-dish-server-mohammadmukhter.vercel.app/chef"
      );
      const data = await fetched.json();
      setChefData(data.chefs);
      setLoader(false);
    };

    dataFetcher();
  }, []);

  if (loader) {
    return (
      <div className="text-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-warning motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }
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
