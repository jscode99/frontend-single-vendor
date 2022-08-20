import React from "react";
import { Footer, Header } from "../../common";

const Layout = ({ children }) => {
  return (
    <div className="container-fluid">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
