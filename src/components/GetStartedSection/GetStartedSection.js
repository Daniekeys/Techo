import React from 'react';
import './GetStartedSection.css'

function GetStartedSection() {
  return(
       <div className='flex items-center justify-center my-20'>
<div className={`tech-Img`} ></div>

<div className={`right-section flex justify-center w-1/2  flex-col items-center `}>
    <div className=" w-8/12">
    <p className={`text-4xl text-white font-extrabold  leading-relaxed text-left`}>You too can<br/> tech!</p>
<p className={` text-white text-lg text-left mb-7`}>Build the chance you want to see in the<br/> world</p>
<button className={`getStarted-btn py-3 p-10 text-black font-bold text-xl rounded-full`}>Get Started</button>

    </div>

</div>
  </div>
  );
}

export default GetStartedSection;
