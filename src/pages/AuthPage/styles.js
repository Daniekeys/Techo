import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    width: "100%",
    overflowX: "hidden",
    height: "100vh",
    overflowY: "hidden",
    
    // paddingTop:'0rem',
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "#f5f6ff",
      paddingTop: "1rem",
    },
  },
  svgcenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%",
    backgroundColor: "white",
    marginTop: theme.spacing(2),

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "1rem",
      height: "auto",
      display: "none",
    },
  },
  svgImage: {
    height: "auto",
    width: "60%",
    [theme.breakpoints.down("sm")]: {
      width: "60%",
      height: "auto",
    },
  },
  rightTab: {
    // backgroundColor:'orange',
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",

  },

  loginButton: {
    display: "flex",
    justifyContent: "center",
    borderRadius: "15px",
    border: "1px solid #00000075",
    overflow: "hidden",
    width:"58%",
    marginTop: "20px",
    height: "50px",
    [theme.breakpoints.down("sm")]: {
      padding: "1rem",
    },
  },

  btn: {
    width:"50%",
    textDecoration: "none",
    padding: "1rem 4rem",
    [theme.breakpoints.down("sm")]: {
      padding: "1rem 4rem",
    },
  },
  btnBg: {
    color: "white",
    borderRadius: "10px",
    width:"50%",
    backgroundColor: "#100E86",
    textDecoration: "none",
    padding: "1rem 4rem",
    [theme.breakpoints.down("sm")]: {
      padding: "1rem 4rem",
    },
  },
  input_container:{
    // backgroundColor:'pink',
    width:"70%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  mainRegBtn: {
    backgroundColor: "#100E86",
    textDecoration: "none",
    width: "100%",
    color: "white",
    padding: "0.5rem 0",
    borderRadius: "10px",
    fontSize: "1.5rem",
    // "&:hover": {
    //   backgroundColor: "#100E60",
    // },
  },
  registrationContainer: {
    width: "80%",
    margin: "auto",
    textAlign: "center",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "1rem",
    },
  },
  socialContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2rem",
    marginBottom: "2rem",
  },
  socialIcon: {
    marginRight: "2rem",
  },
  formSection: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  formItem: {
    width: "100%",
    // border:'1px solid #555555',
    padding: "0rem ",
    backgroundColor: "#ffffff",
    marginBottom: "1rem",
    borderRadius: "5px",
  },
  formId: {
    width: "100%",
    border: "none",
    outlineStyle: "none",
  },

  acc: {
    textDecoration: "none",
    color: "#333",
    marginTop: "1rem",
    fontSize: "1rem",
  },
  forgetContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0.25rem",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  locationFamily: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0.25rem",
    width: "100%",
    marginBottom: "1rem",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  location: {
    width: "100%",

    border: "none",
    outline: "none",
    backgroundColor: "#ffffff",
  },
  locationContainer: {
    borderRadius: "5px",
    padding: "1rem",
    width: "40%",
    display: "flex",
    backgroundColor: "#fff",
  },
  locationIcon: {
    width: "20px",
    height: "auto",
    marginright: "1rem",
  },
}));
