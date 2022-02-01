import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import appContext from "../context/app-context";

function InputField({ placeholder, type, name, handleChange }) {
    const { switchTab} = useContext(appContext);

  return (
    <div className=" my-2">
      <TextField
        id="outlined-basic"
        type={type}
        // placeholder=
        name={name}
        // className="  p-3 my-2 rounded-md w-full outline-none border border-lightBlack"
        onChange={handleChange}
        label={placeholder}
        variant="outlined"
        className={`capitalize p-3 rounded-md w-full outline-none border border-lightBlack`}
      />
    </div>
  );
}

export default InputField;
