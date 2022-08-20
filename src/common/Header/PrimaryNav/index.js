import React from 'react'
import {Col} from 'antd'

const PrimaryNav = () => {
  return (
    <div className={`d-flex w-100 justify-content-center`}>
    <Col xs={10} sm={10} md={6} lg={6} xl={6}>Logo</Col>
    <Col xs={10} sm={10} md={14} lg={14} xl={14}>Search</Col>
    <Col xs={10} sm={10} md={4} lg={4} xl={4}>Sign Up</Col>
    </div>
  )
}

export default PrimaryNav