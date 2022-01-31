import React from "react";
import './NewsLetter.css'

function NewsLetter() {
  return (
    <div className="flex flex-col items-center m-10">
      <p className="text-2xl font-bold text-center">
        We're building something big! Be the first <br /> to know when we launch
      </p>

      <div className="w-7/12 flex items-center justify-center mt-8">
        <input type="text" placeholder="Email" className={`input py-5 px-4 w-9/12`} />
        <button className={`newsletter flex-1 text-white py-5 px-4`}>
            Join the list
        </button>
      </div>
    </div>
  );
}

export default NewsLetter;
