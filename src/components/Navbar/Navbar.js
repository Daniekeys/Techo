import React, { useState, useContext } from "react";
import useStyles from "./styles";
import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  Avatar,
} from "@material-ui/core";
import { Search, Notifications, Cancel } from "@material-ui/icons";
import logo from "../../assets/bluelogo.png";
import pics from "../../assets/image/intro.png"
import AppContext from "../../context/app-context";
import { Link } from "react-router-dom";
import TestNav from "../Testing/TestNav";
import { FaHome } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import {useSelector} from 'react-redux'
const Navbar = ({ setProfileShow, profileShow }) => {
  const { open, setOpen } = useContext(AppContext);
  const [activeBtn, setActiveBtn] = useState(true);
  const {user} = useSelector(state => state.userReducer)
// console.log(`user`, user)
  const handleProfile = () => {
    setProfileShow(!profileShow);
  };
  const handleSidebar = () => {
    setOpen(!open);
  };

  const classes = useStyles({ open, activeBtn });

  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Link to="/">
        <img
          src={logo}
          className={classes.navImg}
          alt="nav"
          onClick={handleSidebar}
        /></Link>
        
        <div className={classes.search}>
          <Search className={classes.searcher} />

          <InputBase placeholder="Search...." className={classes.input} />
          <Cancel className={classes.cancel} />
        </div>
        <div className={classes.navBtnContainer}>
          <Button className={classes.homeBtn} component={Link} to="/home">
            <div className={classes.btnStack}>
              <FaHome className={classes.homeIcon} />

              <Typography className={classes.navTitle} variant="h6">
                Home
              </Typography>
            </div>
          </Button>
          <Button className={classes.mediaBtn} component={Link} to="/media">
            <div className={classes.btnStack}>
              <BsYoutube className={classes.mediaIcon} />
              <div className={classes.navTitle}>Media</div>
            </div>
          </Button>
        </div>
        <div className={classes.icons}>
          <Search
            className={classes.searchButton}
            onClick={() => {
              setOpen(true);
            }}
          />

          <Badge badgeContent={4} color="secondary" className={classes.barge}>
            <Notifications />
          </Badge>
          <Avatar src={pics} alt="user image" onClick={handleProfile} />
          {/* <img src={pics} alt="" className="" /> */}
          <Button className={classes.askBtn} component={Link} to="/ask">
            Ask Question
          </Button>
          {/* <TestNav /> */}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
