import React from "react";
import "./Section1.css";

function Section1() {
  return (
    <div className={`flex flex-col items-center my-10`}>
      <div className={`bg py-3  mb-4 rounded-full  px-16`}>
        <p className="text-base font-bold text-primaryColor">Tech Semester</p>
      </div>
      <h2 className="text-textPrimary text-center text-4xl font-bold my-1">
        We help you build a global{" "}
        <span className="text-black">tech career</span> <br /> starting from
        scratch
      </h2>

      <div className={`img_bg p-12 flex items-end`}>
        <p className="text-white text-left text-3xl font-bold leading-10">
          Learn the skills needed to <br /> access local and global<br />  opportunities you
          desire{" "}
        </p>
      </div>
    </div>
  );
}

export default Section1;
