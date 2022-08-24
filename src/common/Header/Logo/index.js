import React from "react";
import { Grid } from "@mui/material";
// import { Row, Col } from "antd";
import LogoImg from "../../../assets/walmartLogo.svg";
//Styles
import styles from "./index.module.sass";

const Logo = () => {
  return (
    <Grid container height={`100%`} alignItems="center">
      <img src={LogoImg} alt={`Org-Logo`} className={styles.logo} />
    </Grid>
  );
};

export default Logo;
