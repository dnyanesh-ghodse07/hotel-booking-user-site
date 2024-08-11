import React from "react";
import Spinner from "./_components/Spinner";

const loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Spinner />
    </div>
  );
};

export default loading;
