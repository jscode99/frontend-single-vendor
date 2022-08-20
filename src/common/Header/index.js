import React from "react";
import { Row, Col } from "antd";
import PrimaryNav from "./PrimaryNav";
import SecondaryNav from "./SecondaryNav";

const Header = () => {
  return (
    <Row gutter={[10, 10]}>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <PrimaryNav />
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <SecondaryNav />
      </Col>
    </Row>
  );
};

export default Header;
