import React from "react";
import ChefSection from "./ChefSection";
import ContactForm from "./ContactForm";
import PopularRecipe from "./PopularRecipe";

const Home = () => {
  return (
    <div className="py-12 mt-8">
      <ChefSection></ChefSection>
      <PopularRecipe></PopularRecipe>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;
