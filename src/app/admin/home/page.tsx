import React from "react";
import {
  Hero,
  Slider,
  GameCards,
  Model,
  UserFeedBack,
  GetStart,
  Footer,
} from "./constants/index";

const page = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Slider />
      <GameCards />
      <Model />
      <UserFeedBack />
      <GetStart />
      <Footer />
    </div>
  );
};

export default page;
