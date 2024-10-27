import React from "react";
import Card from "./Card";
import TodoFrame from "./TodoFrame";

const Background = () => {
  return (
    <>
      
      <div className="w-[497px] h-[497px] rounded-full blur-3xl bg-[#4400FF1F] absolute left-[-200px] top-[-200px]"></div>
      <div className="h-screen w-screen bg-transparent">
        <div
          className=" min-w-96 w-96 h-[800px] border-white border-[12px] rounded-3xl overflow-hidden mx-auto mt-16 bg-[linear-gradient(192.04deg,_#5E54F7_0%,_#F7A5CB_54.14%,_#C47151_100%)] backdrop-blur-lg"
        >
          <Card />
          <TodoFrame/>
        </div>
      </div>
      <div className="w-[497px] h-[497px] rounded-full blur-3xl bg-[#00F0FF1A] relative bottom-[-200px] right-[-200px]"></div>
    </>
  );
};

export default Background;

