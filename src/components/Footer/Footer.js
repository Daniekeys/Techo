import React from "react";
import "./Footer.css";
import facebook from '../../assets/image/ratingIcon.png';


function Footer() {
  return <div className="p-20 ">
      {/* <p className="text-lg font-bold text-center" >We're building something big! Be the first <br/> to know when we launch</p> */}
   <div className="flex items-center justify-between">
   <ul className="flex flex-col items-start">
    <li className="text-black text-lg my-3 font-bold">Company</li>
    <li className="text-textPrimary text-lg my-3 font-bold">About us</li>
    <li className="text-textPrimary text-lg my-3 font-bold">Service</li>
    <li className="text-textPrimary text-lg my-3 font-bold">Contact us</li>
    </ul>

    <ul className="flex flex-col items-start">
    <li className="text-black text-lg my-3 font-bold">Company</li>
    <li className="text-textPrimary text-lg my-3 font-bold">About us</li>
    <li className="text-textPrimary text-lg my-3 font-bold">Service</li>
    <li className="text-textPrimary text-lg my-3 font-bold">Contact us</li>
    </ul>

    <ul className="flex flex-col items-start">
    <li className="text-black text-lg my-3 font-bold">Contact</li>
    <li className="text-textPrimary text-lg my-3 font-bold">+2347081441122</li>
    <li className="text-textPrimary text-lg my-3 font-bold">admin@techsemester.com</li>
    <div className="flex items-center justify-center">
    <img src={facebook} alt="facebook" className="w-4 h-4 mx-2" />
    <img src={facebook} alt="facebook" className="w-4 h-4 mx-2" />
    <img src={facebook} alt="facebook" className="w-4 h-4 mx-2" />
    <img src={facebook} alt="facebook" className="w-4 h-4 mx-2" />
    </div>
    </ul>
   </div>
    
    <div className="my-7 bg-textPrimary h-px w-full" />

    <p className="text-textPrimary text-lg my-3 font-bold text-center">Copyright Tech Semester.All right Reserved</p>
  </div>;
}

export default Footer;
