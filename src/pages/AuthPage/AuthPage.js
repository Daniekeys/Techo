import { Button, Grid } from "@material-ui/core";
import React, { useContext, useState } from "react";
import Slider from "../../components/Slider";
import useStyles from "./styles";
import Register from "../../components/Register/Register"
import Registe from "../../components/Registe/Registe";
import appContext from "../../context/app-context";

function AuthPage() {
  const { switchTab, setSwitchingTab } = useContext(appContext);

  const classes = useStyles();
  return (
    <>
      <Grid
        container
        className={classes.container}
      >
        <Grid item sm={6} className={classes.svgcenter}>
          <Slider />
        </Grid>
        <Grid className={classes.rightTab} item xs={12} sm={6}>
          <div className={classes.loginButton}>
            <Button
              onClick={() => setSwitchingTab(true)}
              className={switchTab  ? classes.btnBg : classes.btn}
            >
            REGISTER  {" "}
            </Button>
            <Button
              onClick={() => setSwitchingTab(false)}
              className={switchTab  ?classes.btn : classes.btnBg }
            >
              LOGIN
            </Button>
          </div>

          <div className={classes.input_container}>
              <Registe switchTab={switchTab} /> 
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default AuthPage;
