import React from "react";
import NotificationArea from "./NotificationArea";
import Panel from "./Panel";

const Card = () => {
  return (
    <>
      <div className="">
        <div className="w-90 h-20 border-t-0 border-l-0 border-r-0 rounded-b-12 bg-gradient-to-l from-[#8378eb] to-[#cdbaf1] border-[#a794ea] border-b flex items-center shadow-[14.65px 17.58px 29.29px 0px #0000000D] backdrop-blur-[20.5px]" 
             >
        <NotificationArea/>
        <Panel/>
        </div>
      </div>
    </>
  );
};

export default Card;
