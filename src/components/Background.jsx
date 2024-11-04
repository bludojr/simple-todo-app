import React from "react";
import Card from "./Card";
import TodoFrame from "./TodoFrame";

const Background = () => {
  return (
    <>
    <div className="relative h-screen w-screen overflow-hidden bg-transparent">
      <div className="absolute w-[497px] h-[497px] rounded-full bg-[#4400FF1F] blur-3xl top-[-150px] left-[-150px] z-[-1]" />
      
      <div className="w-custom1 h-custom1 rounded-full blur-3xl bg-custom1 absolute -left-50 -top-50 "></div>
      <div className="h-screen w-screen bg-transparent">
        <div
          className=" min-w-96 w-96 h-200 border-white border-12 rounded-3xl overflow-hidden mx-auto mt-16 bg-custom-gradient backdrop-blur-lg"
        >
          <Card />
          <TodoFrame/>
        </div>
      </div>
      <div className="w-custom1 h-custom1 rounded-full blur-3xl bg-custom2 relative -bottom-50 -right-50"></div>
    </div>
    </>
  );
};

export default Background;
