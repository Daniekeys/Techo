import React from "react";
import { Formik, Form, useField, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField } from "@material-ui/core";
// import { TextFields } from "@material-ui/icons";
// import TextField from '@mui/material/TextField';

function FormikInput() {
  const validate = Yup.object({
    first_name: Yup.string()
      .max(15, "must be 15 characters or less")
      .required("first name required"),
    last_name: Yup.string()
      .max(15, "must be 15 characters or less")
      .required("last name required"),
    email: Yup.string().email("email is inValid").required("email is required"),
    password: Yup.string()
      .min(6, "must be at least less than 6")
      .required("password required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], " password must match")
      .required("confirm password required"),
  });
  return (
    <div>
      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validate}
      >
        {(formik) => (
          <div className=" p-20">
            <p>formik</p>
            {console.log(formik.values)}
            <Form>
              <TextFieldComp type="text" label="first name" name="first_name" />
              <TextFieldComp type="text" label="last name" name="last_name" />
              <TextFieldComp type="text" label="email" name="email" />
              <TextFieldComp type="text" label="password" name="password" />
              <TextFieldComp type="text" label="confirm password" name="confirmPassword" />
              <button type="submit" className="p-3 bg-primaryColor  text-white">
                Submit
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default FormikInput;

const TextFieldComp = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  // console.log("field, meta", field, meta);
  return (
    <div className="flex flex-col w-40 m-4">
      {/* <label htmlFor={field.name}>{label}</label> */}
      <TextField
        variant="outlined"
        error={meta.touched && meta.error }
        label={label}
        type="text"
        className={`border-textPrimary border `}
        {...field}
        {...props}
        
      />
      <ErrorMessage component="p"  name={field.name} className="text-red text-sm" />
    </div>
  );
};
