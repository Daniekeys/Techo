import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import google from "../../assets/google.jpg";
import linkedin from "../../assets/linkedin.jpg";
import InputField from "../Input";
import "./register.css";
import techsemester from "../../assets/bluelogo.png";
import { userLogin, userRegister } from "../../services/PostServices";
// import {LoadingButton} from '@material-ui/lab';
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  password1: "",
  password2: "",
  phone: "",
};
function Registe({ switchTab }) {
  const [form, setForm] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  console.log("form", form);
  // const submit = () => {
  //   console.log('form', form);
  // }
  const handleChange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();

      // console.log(`userData`, userData);

      const response = await userRegister(form);
      console.log(response);
      console.log(response?.status);
      if (response?.status === 201) {
        setLoading(false);
        history.push("/question-feeds");
        // setUserData(response?.data?.detail);
      } else {
        alert(response);
      }
    } catch (error) {
      setLoading(false);

      console.log(`error`, error);
    }
  };


  const handleLogin = async (e) => {
    //login function
    setLoading(true);
    e.preventDefault();
    // const { email, password } = loginValues; //get values from context

    // const item = { email: email, password: password };
    try {
      const response = await userLogin(form);
      console.log(`response`, response);
      console.log(`token`, response?.data?.access_token);
      setLoading(false);
      if (response.status === 200) {
        localStorage.setItem("token", response?.data?.access_token);
        localStorage.setItem("refreshToken", response.data.refresh_token);
        // setUserData(response.data.user);
        setLoading(false);

        history.push("/question-feeds"); //redirect to dashboard page if login is successful
        return;
      }
    } catch (error) {
      setLoading(false);
      console.log(`error`, error);
    }
  };
  return (
    <div className="relative w-10/12  ">
      <div className="flex items-center justify-center mt-8">
        <img alt="google" src={google} className="w-12 h-12 mx-2" />
        <img alt="google" src={linkedin} className="w-12 h-12 mx-2" />
      </div>
      <div
        className={`${
          switchTab ? null : "mt-32 "
        } flex flex-col w-full  justify-center `}
      >
        {switchTab && (
          <InputField
            name="first_name"
            placeholder="first name"
            type="text"
            handleChange={handleChange}
          />
        )}
        {switchTab && (
          <InputField
            name="last_name"
            placeholder="last name"
            type="text"
            handleChange={handleChange}
          />
        )}
        <InputField
          name="email"
          placeholder="email"
          type="text"
          handleChange={handleChange}
        />
        <InputField
          name={"password1" && "password"}
          placeholder="password"
          type="text"
          handleChange={handleChange}
        />
        {switchTab && (
          <InputField
            name="password2"
            placeholder="confirm password"
            type="text"
            handleChange={handleChange}
          />
        )}
        {switchTab && (
          <InputField
            name="phone"
            placeholder="Phone Number"
            type="text"
            handleChange={handleChange}
          />
        )}
      </div>
      {switchTab && (
        <div className="flex items-center mt-3">
          <input type="checkbox" className="mr-4" />
          <p className="text-xs text-textPrimary w-10/12 ">
            By signing up on this platform, you agree to Techsemester's Terms &
            conditions.
          </p>
        </div>
      )}

      {switchTab ? (
        // <button className="btn" onClick={handleRegister}>
        //   {loading ? (
        //         <div className="animate-spin border-2 border-dotted my-1 border-white w-7 h-7 rounded-full" />
        //       ) : (
        //         <p>Register</p>
        //       )}
        // </button>
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
      ) : (
        // <button onClick={handleLogin} className="btn">Login</button>
        <button
        className="cursor-pointer text-2xl uppercase flex items-center justify-center  p-3 w-full rounded-md bg-primaryColor hover:bg-darkPrimaryColor text-white mt-6"
        onClick={handleLogin} 
      >
        {loading ? (
          <div className="animate-spin border-2 border-dotted my-1 border-white w-7 h-7 rounded-full" />
        ) : (
          <p>Login</p>
        )}
      </button>
      )}

      <p className="text-right mt-2">
        {switchTab ? (
          <Link to="#" className="text-primaryColor">
            Already have an account? Login
          </Link>
        ) : (
          <div className="flex items-center justify-between w-full">
            <Link to="#" className="text-primaryColor">
              Not a member? Register
            </Link>

            <Link to="#" className="text-primaryColor">
              Forgot your password
            </Link>
          </div>
        )}
      </p>
      {switchTab && (
        <div className="flex items-center justify-between w-full absolute -bottom-10">
          <div className="flex items-center justify-center">
            <img src={techsemester} alt="techsemester" className="w-5 h-5" />
            <p className="text-right ml-2 text-primaryColor ">Techsemester</p>
          </div>

          <p className="text-right ml-2 text-textPrimary ">
            2022 All Rights Reserved
          </p>
        </div>
      )}
    </div>
  );
}

export default Registe;
