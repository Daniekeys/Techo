import React, { useContext, useEffect } from "react";
import useStyles from "./styles";
import { Grid, Typography, Button } from "@material-ui/core";
import svg from "../../assets/signupsvg.jpg";
import linkedin from "../../assets/linkedin.jpg";

import { Link, useHistory } from "react-router-dom";
import LoginInput from "../../components/Input/LoginInput";

import AppContext from "../../context/app-context";
import LoginPasswordInput from "../../components/Input/LoginPasswordInput";
import { userLogin } from "../../services/PostServices";
import GoogleLogin from "./GoogleLogin";
import logo from "../../assets/bluelogo.png";
import google from "../../assets/google.png";
import { onBoardingSliderData } from "../../Helpers/onBoardingSliderData";
import Slider from "../../components/Slider";

const Login = () => {
  const { loginValues, setUserData } = useContext(AppContext);

  const history = useHistory();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleSubmit = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "sessionid=2b98u3jug5uwl9fo5ypars8eli7ejsti");

    var raw = JSON.stringify({
      email: "starlordflash@gmail.com",
      password: "ddaanniieel",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://techsemester.tk/api/users/auth/login/", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const handleLogin = async (e) => {
    //login function
    e.preventDefault();
    const { email, password } = loginValues; //get values from context

    const item = { email: email, password: password };
    try {
      const response = await userLogin(item);
      console.log(`response`, response);
      console.log(`token`, response?.data?.access_token);
      if (response.status === 200) {
        localStorage.setItem("token", response?.data?.access_token);
        localStorage.setItem("refreshToken", response.data.refresh_token);
        setUserData(response.data.user);
       
        history.push("/home"); //redirect to dashboard page if login is successful
      }
    } catch (error) {
      console.log(`error`, error);
    }
  };

  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.container}>
        <Grid item xs={12} sm={6} className={classes.svgcenter}>
          <Slider />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.center}>
          <div className={classes.loginButton}>
            <Button
              component={Link}
              to="/register"
              className={classes.loginBtn}
            >
              REGISTER
            </Button>
            <Button
              component={Link}
              to="/login"
              className={classes.registerBtn}
            >
              LOGIN
            </Button>
          </div>

          <div className={classes.registrationContainer}>
            <p className="text-2xl  text-textPrimary">
              Login with your social network
            </p>
            <div className={classes.socialContainer}>
              <img src={google} alt="" className="h-10 w-10  mr-10" />
              <Link to="/linkedin">
                <img
                  alt="google"
                  src={linkedin}
                  className={classes.socialIcon}
                />
              </Link>
              {/* <GoogleLogin  />  */}
            </div>
            <Typography variant="h4" className={classes.create}>
              Login to your account
            </Typography>
            <div className={classes.formSection}>
              <div className={classes.formIt}>
                <LoginInput
                  placeholder="Email"
                  name="email"
                  label=""
                  type="email"
                  ErrorMessage=""
                />
              </div>
              <div className={classes.formI}>
                <LoginPasswordInput placeholder="Password" name="password" />
              </div>
              <Button
                className={classes.mainRegBtn}
                onClick={handleLogin}
                // component={Link} to="/home"
              >
                Login
              </Button>
              <div className="flex items-center justify-between my-3">
                <p className="text-lg text-textPrimary font-semibold">
                  Not a member?{" "}
                  <Link
                    className="text-lg text-primaryColor font-semibold"
                    to="/register"
                  >
                    Register
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
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
