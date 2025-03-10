import React from "react";
import CatboyCard from "../components/CatboyCard";
import CatboyForm from "../components/CatboyForm";

const Home = () => {
  return (
    <div>
      <h1>🐱 Catboy App</h1>
      <CatboyCard />
      <CatboyForm />
    </div>
  );
};

export default Home;