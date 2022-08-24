import React from "react";
import { Footer, Header } from "../../common";
// import styles from "./index.module.sass";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
