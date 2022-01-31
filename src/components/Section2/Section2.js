import React from 'react';
import './Section2.css'

function Section2() {
    return (
        <div className="flex flex-col items-center my-10">
          {/* <div className={`bg py-3  mb-4 rounded-full  px-16`}>
            <p className="text-base font-bold text-primaryColor">Tech Semester</p>
          </div>
          <p className="text-textPrimary text-center text-xl font-bold my-1">
            We help you build a global{" "}
            <span className="text-black">tech career</span> <br /> starting from
            scratch
          </p> */}
    
          <div className={`img_bg2 p-12 flex items-end`}>
            <p className="text-white text-right text-3xl font-bold leading-10 w-full">
            Give back to society by<br /> mentoring tech learners<br /> from your experience<br /> with ease
            </p>
          </div>
        </div>
      );
}

export default Section2;
