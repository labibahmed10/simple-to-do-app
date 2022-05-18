import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <InfinitySpin color="grey" />
    </div>
  );
};

export default Spinner;
