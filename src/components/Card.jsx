import React from "react";
import NotificationArea from './NotificationArea'
import Panel from "./Panel";


const Card = () => {
  return (
    <>
      <div className="">
        <div className="w-[360px] h-[80px] border-t-0 border-l-0 border-r-0 rounded-b-[12px] bg-gradient-to-l from-[#8378eb] to-[#cdbaf1] border-[#a794ea] border-[1px] flex items-center shadow-[14.65px 17.58px 29.29px 0px #0000000D] backdrop-blur-[20.5px]" 
             style={{
             
             }}
             >
        <NotificationArea/>
        <Panel/>
        </div>
      </div>
    </>
  );
};

export default Card;


