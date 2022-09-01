import React from "react";
import { Box } from "@mui/material";

import { Footer, Header, SubHeader, AppCarousel } from "../../common";

import styles from "./index.module.sass";

const Layout = ({ pageName, children }) => {
  return (
    <>
      <Header />
      <SubHeader />
      {pageName === "landing" && <AppCarousel />}
      <Box className={styles.body_container}>{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
