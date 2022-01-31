import React from "react";

const Button = ({ rounded, onClick, children,sm }) => {
  return (
    <button
      onClick={onClick}
      className={`${rounded && "rounded-full"} ${sm && "text-sm"} ease-in-out duration-300 px-8 py-2 text-white font-semibold bg-googleBlue hover:bg-darkGoogleBlue `}
    >
      {children}
    </button>
  );
};

export default Button;
