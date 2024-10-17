import React from "react";

const Background = () => {
  return (
    <>
      <div className="w-[497px] h-[497px] rounded-full blur-3xl bg-[#4400FF1F] absolute left-[-200px] top-[-200px]"></div>
      <div className="h-screen w-screen bg-transparent">
        <div
          className=" min-w-[360px] w-[360px] h-[800px] border-white border-[12px] rounded-3xl overflow-hidden mx-auto mt-16"
          style={{
            background:
              "linear-gradient(192.04deg, #5E54F7 0%, #F7A5CB 54.14%, #C47151 100%)",
          }}
        ></div>
      </div>
      <div className="w-[497px] h-[497px] rounded-full blur-3xl bg-[#00F0FF1A] absolute bottom-[-200px] right-[-200px]"></div>
    </>
  );
};

export default Background;


