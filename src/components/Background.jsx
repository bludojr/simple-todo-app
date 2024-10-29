import React from "react";
import Card from "./Card";
import TodoFrame from "./TodoFrame";

const Background = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-transparent">
      <div className="absolute w-[497px] h-[497px] rounded-full bg-[#4400FF1F] blur-3xl top-[-150px] left-[-150px] z-[-1]" />
      
      <div
        className="relative min-w-96 w-96 h-[800px] border-white border-[12px] rounded-3xl overflow-hidden mx-auto mt-16 bg-[linear-gradient(192.04deg,_#5E54F7_0%,_#F7A5CB_54.14%,_#C47151_100%)] backdrop-blur-lg"
      >
        <Card />
        <TodoFrame />
      </div>
      
      
      <div className="absolute w-[497px] h-[497px] rounded-full bg-[#00F0FF1A] blur-3xl bottom-[-150px] right-[-150px] z-[-1]" />
    </div>
  );
};

export default Background;
