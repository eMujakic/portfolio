import React from "react";
import DotLoader from "react-spinners/DotLoader";

const Loading = () => {
  return (
    <div className="bg-[#0f0f0f] m-auto flex items-center justify-center h-screen">
      <DotLoader color={"#ffffff"} size={50}></DotLoader>
    </div>
  );
};

export default Loading;
