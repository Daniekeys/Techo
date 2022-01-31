import { Typography } from "@material-ui/core";
import React from "react";
import "./header.css";
import landingImg from "../../assets/intro.png";
import star from "../../assets/image/star.png";
import useStyles from "./styles";

function Header() {
  const classes = useStyles();

  return (
    <div>
      <div className={`bg-cont sectionOne`}>
        <div className="aLeft">
          <div className={`bg py-4  my-2 rounded-full flex items-center px-10`}>
              <img src={star} alt="start" className="w-4 h-4 mr-2" />
            <p className="text-base font-bold text-primaryColor">we accelerate tech talents</p>
          </div>
          <p className="text-black text-3xl font-bold my-1">
            A learning community for <br/> digital talents
          </p>
          <p className="text-black text-lg font-bold text-lightBlack mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="aRight">
          <img src={landingImg} alt="techsemester" className={classes.img} />
        </div>
      </div>
    </div>
  );
}

export default Header;
