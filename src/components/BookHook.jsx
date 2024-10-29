import React from "react";

const SingleHook = () => {
  return (
    <div className="w-6 h-4 bg-[#EAEAEA] border-l-0 border-r-0 border-b-0 border-t-[1.9px] border-t-[#D7D7D7] rounded-sm flex space-x-1 mt-4">
      <div className="bg-[#4E4E4E] h-[32px] w-[4px] rounded-full relative bottom-[22px] left-[6px]"></div>
      <div className="bg-[#4E4E4E] h-[32px] w-[4px] rounded-full relative bottom-[22px] right-[-6px]"></div>
    </div>
  );
};

const BookHook = () => {
const repeatTimes = 8;

  return (
    <>
      <div className="flex space-x-4 ml-3 h-10 ">
        {Array.from({length: repeatTimes}).map((_, index) => (
            <SingleHook key={index} />
        ))}
      </div>
    </>
  );
};

export default BookHook;

// backdrop-filter: blur(20.505619049072266px)

// box-shadow: 14.65px 17.58px 29.29px 0px #0000000D;
