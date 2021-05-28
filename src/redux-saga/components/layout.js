import React from 'react';
import { Row, Col,  Spin, Space } from 'antd';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getDataLoading } from '../reselect/conrona-reselect';

const LayoutCorona = (props) => {
  const { loading } = useSelector(createStructuredSelector({
    loading: getDataLoading
  }))

  if(loading){
    return (
      <Row>
        <Col span={20} offset={2}>
          <Space size="middle">
          <Spin size="small" />
          <Spin />
          <Spin size="large" />
        </Space>
        </Col>
      </Row>
    )
  }

  return (
    <Row>
      <Col span={20} offset={2}>
        {props.children}
      </Col>
    </Row>
  )
}

export default React.memo(LayoutCorona);