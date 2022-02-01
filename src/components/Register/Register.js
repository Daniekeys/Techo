import React, { useState, useContext } from "react";
import useStyles from "./styles";
import {
  Grid,
  Typography,
  Button,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";
import svg from "../../assets/transparent1.png";
import linkedin from "../../assets/linkedin.jpg";
import google from "../../assets/google.jpg";
import { Link, useHistory } from "react-router-dom";
import TextInput from "../Input/TextInput";
import AppContext from "../../context/app-context";
import PasswordInput from "../Input/PasswordInput";
import { userRegister } from "../../services/PostServices";
import flag from "../../assets/flag.svg";
import Slider from "../Slider";
import countryData from "../../Helpers/CountryState.json";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [country, setCountry] = useState(0);
  const [state, setState] = useState(0);
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [education, setEducation] = useState("");
  const [loading, setLoading] = useState(false);

  const { values, setUserData } = useContext(AppContext);

  const history = useHistory();

  const handleRegister = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();

      const userData = {
        email,
        password1,
        password2,
        first_name,
        last_name,
        phone,
      };
      // console.log(`userData`, userData);

      const response = await userRegister(userData);
      console.log(response);
      console.log(response?.status);
      if (response?.status === 201) {
        setLoading(false);
        history.push("/question-feeds");
        setUserData(response?.data?.detail);
      } else {
        alert(response);
      }
    } catch (error) {
      setLoading(false);

      console.log(`error`, error);
    }
  };

  const classes = useStyles();

  
  return (
    <>
      {/* <Grid container >
     
        <Grid item xs={12} sm={6} className={classes.center}>
        */}
          <div >
            {/* <div className={classes.socialContainer}>
                <img alt="google" src={google} className={classes.socialIcon} />
                <img
                  alt="google"
                  src={linkedin}
                  className={classes.socialIcon}
                />
            </div> */}
     
            <div className="flex flex-col w-full ">
              <input
                type="first_name"
                placeholder="First Name"
                value={first_name}
                className="  p-3 my-2 rounded-md w-full outline-none "
                onChange={(e) => setFirst_name(e.target.value)}
              />

              <input
                type="text"
                placeholder="Last Name"
                value={last_name}
                className="  p-3 my-2 rounded-md w-full outline-none "
                onChange={(e) => setLast_name(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email"
                value={email}
                className="  p-3 my-2 rounded-md w-full outline-none "
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password1}
                className="  p-3 my-2 rounded-md w-full outline-none "
                onChange={(e) => setPassword1(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm password"
                value={password2}
                className="  p-3 my-2 rounded-md w-full outline-none "
                onChange={(e) => setPassword2(e.target.value)}
              />

              <input
                type="text"
                placeholder="Phone number"
                value={phone}
                className="  p-3 my-2 rounded-md w-full outline-none "
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <button
              className="cursor-pointer text-2xl uppercase flex items-center justify-center  p-3 w-full rounded-md bg-primaryColor hover:bg-darkPrimaryColor text-white mt-6"
              onClick={handleRegister}
            >
              {loading ? (
                <div className="animate-spin border-2 border-dotted my-1 border-white w-7 h-7 rounded-full" />
              ) : (
                <p>Register</p>
              )}
            </button>

         
            <div className="flex items-center justify-between my-3">
              <p className="text-lg text-textPrimary font-semibold">
                Have account already?{" "}
                <Link
                  to="/login"
                  className="text-lg text-primaryColor font-semibold"
                >
                  Login
                </Link>
              </p>
              <Link
                to="/forgetPassword"
                className="text-lg text-primaryColor font-semibold"
              >
                Forgot your password?
              </Link>
            </div>
          </div>
        {/* </Grid>
      </Grid> */}
    </>
  );
};

export default Register;
